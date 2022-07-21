import React, { useState, useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Modal from 'react-modal';
import Select from 'react-select'
import Banner from "../Banner";
import ArchiveItem from "../ArchiveItem";
import TextBlock from "../TextBlock";
import Footer from "../Footer";
import Nav from "../Nav";
import Drawer from '../Drawer';

const ArchiveBeta = () => {
    const itemsPerLoad = 20;
    const [archiveResults, setArchiveResults] = useState([]);
    const [locations, setLocations] = useState([]);
    const [tags, setTags] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [filterYear, setFilterYear] = useState({value: "any", label: "Any"});
    const [filterMedium, setFilterMedium] = useState({value: "any", label: "Any"});
    const [filterLocations, setFilterLocations] = useState([]);
    const [filterTags, setFilterTags] = useState([]);
    const [filters, setFilters] = useState({});
    const [numItemsShowing, setNumItemsShowing] = useState(itemsPerLoad);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    function fetchArchiveItems() {
        const url = "/api/v1/archive_items/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => {
                console.log(response);
                setArchiveResults(response);
            })
            .catch(() => this.props.history.push("/"));
    }

    function fetchLocations() {
        const url = "/api/v1/locations/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => {
                setLocations(response);
            })
            .catch(() => this.props.history.push("/"));
    }

    function fetchTags() {
        const url = "/api/v1/tags/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => {
                setTags(response);
            })
            .catch(() => this.props.history.push("/"));
    }

    // get data on mount
    useEffect(() => {
        fetchArchiveItems();
        fetchLocations();
        fetchTags();
    }, []);

    // filter results whenever filters or data changes
    useEffect(() => {
        applyFilters();
    }, [filters, archiveResults]);

    // filter data with any active filters
    function applyFilters() {
        let results = archiveResults;

        if (filters.year && filters.year !== "any") {
            results = results.filter(item => item.year >= filters.year && item.year < filters.year + 10);
        }

        if (filters.medium && filters.medium !== "any") {
            results = results.filter(item => item.medium === filters.medium);
        }

        if (filters.locations && filters.locations.length > 0) {
            const filterLocationNames = [];
            filters.locations.forEach(i => {
                filterLocationNames.push(i.name);
            })

            results = results.filter(item => item.location_list.filter(i => filterLocationNames.includes(i)).length > 0);
        }

        if (filters.tags && filters.tags.length > 0) {
            const filterTagNames = [];
            filters.tags.forEach(i => {
                filterTagNames.push(i.name);
            })

            results = results.filter(item => item.tag_list.filter(i => filterTagNames.includes(i)).length > 0);
        }

        setFilteredResults(results);
    }

    const leftText = "<p>World Arts Foundation Inc will soon have a vast library of historic preserved media available to browse, here in the archive. Check back in the coming months to explore the full collection.</p>";
    const yearOptions = [
        { value: "any", label: "Any" },
        { value: 1960, label: "1960's" },
        { value: 1970, label: "1970's" },
        { value: 1980, label: "1980's" },
        { value: 1990, label: "1990's" },
        { value: 2000, label: "2000's" },
        { value: 2010, label: "2010's" },
        { value: 2020, label: "2020's" },
    ];

    const mediumOptions = [
        { value: "any", label: "Any" },
        { value: "photo", label: "Photos" },
        { value: "film", label: "Films" },
        { value: "audio", label: "Audio" },
        { value: "pdf", label: "Documents" },
    ];

    function handleYearSelect(val) {
        setFilterYear(val);
        setFilters({...filters, year: val.value})
    }

    function handleMediumSelect(val) {
        setFilterMedium(val);
        setFilters({...filters, medium: val.value})
    }

    useEffect(() => {
        setFilters({...filters, locations: filterLocations})
    }, [filterLocations])

    useEffect(() => {
        setFilters({...filters, tags: filterTags})
    }, [filterTags])

    function showMoreItems() {
         setNumItemsShowing(numItemsShowing + itemsPerLoad);
    }

    function openModal(item) {
        setModalItem(item);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement(document.getElementsByClassName('page-wrapper')[0]);


    return (
        <div className="page-wrapper --is-dark">
            <Nav />
            <Banner themeLight={false} alignLeft={true} headline="Albina<br/>Community Archive" className="--has-graphic --is-archive" />
            <TextBlock themeLight={false} leftText={leftText} vPadding="lg" />
            <section className="archive-wrapper global-container">
                <div className="archive-content">
                    <div className="archive-filters">
                        <div className="archive-filters__col">
                            <div className="archive__label">Year</div>
                            <Select
                                placeholder="Select years..."
                                value={filterYear}
                                className="react-select-container"
                                classNamePrefix="react-select"
                                options={yearOptions}
                                isSearchable={false}
                                onChange={handleYearSelect}
                            />
                        </div>
                        <div className="archive-filters__col">
                            <div className="archive__label">Medium</div>
                            <Select
                                placeholder="Select medium..."
                                value={filterMedium}
                                className="react-select-container"
                                classNamePrefix="react-select"
                                options={mediumOptions}
                                isSearchable={false}
                                onChange={handleMediumSelect}
                            />
                        </div>
                    </div>

                    <div className="archive-tags">
                        <Drawer label="Location" data={locations} handleUpdate={setFilterLocations} />
                        <Drawer label="Tags" data={tags} handleUpdate={setFilterTags} />
                    </div>

                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                    >
                        <Masonry gutter={20}>
                            {filteredResults.slice(0, numItemsShowing).map((item, index) => (
                            <ArchiveItem
                                key={index}
                                item={item}
                                handleClick={openModal}
                            />
                        ))}
                        </Masonry>
                    </ResponsiveMasonry>
                    {numItemsShowing < filteredResults.length && (
                        <div className="archive-load-more">
                            <button type="button" onClick={showMoreItems} className="archive-load-more-btn">Load More</button>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
                contentLabel="Archive Modal"
            >

                <button className="modalClose" onClick={closeModal}></button>
                <div className="modalContent">
                    <div className="modalArchiveItem">
                        {modalItem?.medium === "photo" && modalItem?.content_files[0] &&
                            <img className="modalImage" src={modalItem?.content_files[0]} />
                        }
                        <div className="modalMetaInfo">
                            {modalItem?.title && (
                                <div className="modalMetaItem">
                                    <div className="modalMetaLabel">TITLE:</div>
                                    {modalItem?.title}
                                </div>
                            )}
                            {modalItem?.year && (
                                <div className="modalMetaItem">
                                    <div className="modalMetaLabel">YEAR:</div>
                                    {modalItem?.year}
                                </div>
                            )}
                            {modalItem?.description && (
                                <div className="modalMetaItem">
                                    <div className="modalMetaLabel">DESCRIPTION:</div>
                                    {modalItem?.description}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
export default ArchiveBeta;
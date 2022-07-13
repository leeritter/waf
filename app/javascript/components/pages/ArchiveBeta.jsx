import React, { useState, useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Select from 'react-select'
import Banner from "../Banner";
import ArchiveItem from "../ArchiveItem";
import TextBlock from "../TextBlock";
import Footer from "../Footer";
import Nav from "../Nav";
import Drawer from '../Drawer';

const ArchiveBeta = () => {
    const [archiveResults, setArchiveResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [filterYear, setFilterYear] = useState({value: "any", label: "Any"});
    const [filterMedium, setFilterMedium] = useState({value: "any", label: "Any"});
    const [filters, setFilters] = useState({});

    // fetch initial data
    function fetchResults() {
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

    // get data on mount
    useEffect(() => {
        fetchResults();
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
                        <Drawer>Drawer shit man</Drawer>
                    </div>

                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                    >
                        <Masonry gutter={20}>
                            {filteredResults.map((item, index) => (
                            <ArchiveItem
                                key={index}
                                year={item.year}
                                title={item.title}
                                medium={item.medium}
                                content_files={item.content_files}
                            />
                        ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </section>
            <Footer />
        </div>
    );
}
export default ArchiveBeta;
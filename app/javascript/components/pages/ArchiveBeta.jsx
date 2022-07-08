import React, { useState, useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Select from 'react-select'
import { Link } from "react-router-dom";
import Banner from "../Banner";
import ArchiveItem from "../ArchiveItem";
import TextBlock from "../TextBlock";
import Footer from "../Footer";
import Nav from "../Nav";

const ArchiveBeta = () => {
    const [archiveResults, setArchiveResults] = useState([]);
    const [filterYear, setFilterYear] = useState(null);

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

    useEffect(() => {
        fetchResults();
    }, []);

    const leftText = "<p>World Arts Foundation Inc will soon have a vast library of historic preserved media available to browse, here in the archive. Check back in the coming months to explore the full collection.</p>";
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    function handleYearSelect(val) {
        console.log("change year", val);
        setFilterYear(val);
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
                            <div className="archive-filters__label">Year</div>
                            <Select
                                placeholder="Select years..."
                                value={filterYear}
                                className="react-select-container"
                                classNamePrefix="react-select"
                                options={options}
                                isSearchable={false}
                                onChange={handleYearSelect}
                            />
                        </div>
                    </div>

                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                    >
                        <Masonry gutter={20}>
                            {archiveResults.map((item, index) => (
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
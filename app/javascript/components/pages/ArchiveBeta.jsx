import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Banner from "../Banner";
import ArchiveItem from "../ArchiveItem";

const ArchiveBeta = () => {
    const [archiveResults, setArchiveResults] = useState([]);

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

    return (
        <div className="page-wrapper --is-dark">
            <Banner themeLight={true} alignLeft={true} headline="The archive" />
            <section>
                <h1>Archive Items</h1>
                <p>Count: {archiveResults.length}</p>

                {archiveResults.map((item, index) => (
                    <ArchiveItem
                        key={index}
                        year={item.year}
                        title={item.title}
                        medium={item.medium}
                        content_files={item.content_files}
                    />
                ))}
            </section>
        </div>
    );
}
export default ArchiveBeta;
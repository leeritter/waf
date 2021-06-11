import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Archive = () => {
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
                    <div key={index}>
                        Item: {item.title}
                    </div>
                ))}
            </section>
        </div>
    );
}
export default Archive;
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Masonry from 'masonry-layout';

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

    function initMasonry() {
        var msnry = new Masonry('.grid', {
            // options
            itemSelector: '.grid-item',
            columnWidth: 200
        });
    }

    useEffect(() => {
        fetchResults();
        initMasonry();
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

            <div className="grid">
                <div className="grid-item"><img src="https://www.placecage.com/c/200/300" /></div>
                <div className="grid-item grid-item--width2"><img src="https://www.placecage.com/c/600/400" /></div>
                <div className="grid-item"><img src="https://www.placecage.com/c/300/500" /></div>
                <div className="grid-item"><img src="https://www.placecage.com/c/600/300" /></div>
                <div className="grid-item grid-item--width2"><img src="https://www.placecage.com/c/400/400" /></div>
                <div className="grid-item"><img src="https://www.placecage.com/c/600/500" /></div>
                <div className="grid-item"><img src="https://www.placecage.com/c/200/300" /></div>
                <div className="grid-item grid-item--width2"><img src="https://www.placecage.com/c/600/400" /></div>
                <div className="grid-item"><img src="https://www.placecage.com/c/300/500" /></div>
                <div className="grid-item"><img src="https://www.placecage.com/c/600/300" /></div>
                <div className="grid-item grid-item--width2"><img src="https://www.placecage.com/c/400/400" /></div>
                <div className="grid-item"><img src="https://www.placecage.com/c/600/500" /></div>
            </div>
        </div>
    );
}
export default Archive;
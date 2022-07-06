import React from "react";
import classNames from 'classnames';

const ArchiveItem = ({year, title, medium, content_files}) => {
    console.log(title);
    console.log(medium);
    return (
        <div className={"cmpt-archive-item"}>
            {medium === "photo" && (
                <div className={"cmpt-archive-item__thumb"}>
                    <img src={content_files[0] ? content_files[0].service_url : "default-img-src"} />
                </div>
            )}
            <div className={"cmpt-archive-item__meta"}>
                {title && <div className={"cmpt-archive-item__title"}>{title}</div>}
                {year && <div className={"cmpt-archive-item__year"}>{year}</div>}

            </div>
        </div>
    )
}

export default ArchiveItem;
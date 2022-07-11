import React from "react";

const ArchiveItem = ({year, title, medium, content_files}) => {
    return (
        <div className="cmpt-archive-item">
            <button type="button" className="cmpt-archive-item__button">
                {medium === "photo" && content_files[0] && (
                    <div className="cmpt-archive-item__thumb">
                        <img src={content_files[0].service_url} />
                    </div>
                )}
                <div className={"cmpt-archive-item__meta"}>
                    {title && <div className={"cmpt-archive-item__title"}>{title}</div>}
                    {year && <div className={"cmpt-archive-item__year"}>{year}</div>}

                </div>
            </button>
        </div>
    )
}

export default ArchiveItem;
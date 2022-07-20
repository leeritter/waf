import React from "react";

const ArchiveItem = ({year, title, medium, content_files, handleClick}) => {
    return (
        <div className="cmpt-archive-item">
            <button type="button" className="cmpt-archive-item__button" onClick={() => handleClick(year, title, medium, content_files)}>
                {medium === "photo" && content_files[0] && (
                    <div className="cmpt-archive-item__thumb">
                        <img src={content_files[0]} />
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
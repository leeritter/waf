import React from "react";

const ArchiveItem = ({item, handleClick}) => {
    return (
        <div className="cmpt-archive-item">
            <button type="button" className="cmpt-archive-item__button" onClick={() => handleClick(item)}>
                {item.medium === "photo" && item.content_files[0] && (
                    <div className="cmpt-archive-item__thumb">
                        <img src={item.content_files[0]} />
                    </div>
                )}
                <div className={"cmpt-archive-item__meta"}>
                    {item.title && <div className={"cmpt-archive-item__title"}>{item.title}</div>}
                    {item.year && <div className={"cmpt-archive-item__year"}>{item.year}</div>}

                </div>
            </button>
        </div>
    )
}

export default ArchiveItem;
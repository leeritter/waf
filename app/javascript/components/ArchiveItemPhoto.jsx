import React from "react";
import classNames from 'classnames';

const ArchiveItemPhoto = ({photos}) => {
    return (
        <div>
            {item.photos.map((file) => (
                <img className="cmpt-archive-img" key={file.id} src={file.service_url} />
            ))}
        </div>
    )
}

export default ArchiveItemPhoto;
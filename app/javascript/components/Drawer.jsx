import React from "react";

const Drawer = ({children}) => {
    return (
        <div className="cmpt-drawer">
            <div className="archive__label">Medium</div>
            {children}
        </div>
    );
}

export default Drawer;
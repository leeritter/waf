import React from "react";
import classNames from 'classnames';

const DrawerButton = ({label, id, isActive = false, handleClick}) => {
    return (
        <button
            type="button"
            className={classNames("cmpt-drawer-button", isActive && "active")}
            onClick={() => {handleClick(id)}}
        >
            {label}
        </button>
    );
}

export default DrawerButton;
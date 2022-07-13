import React, {useState, useEffect} from "react";
import DrawerButton from "./DrawerButton";

const Drawer = ({label, data, handleUpdate}) => {
    const defaultLimit = 3;
    const [limit, setLimit] = useState(defaultLimit);
    const [visibleData, setVisibleData] = useState([]);
    const [activeItems, setActiveItems] = useState([]);

    useEffect(() => {
        setVisibleData(data.slice(0, limit));
    }, [limit, data]);

    useEffect(() => {
        // update parent state with selected data
        handleUpdate(data.filter(i => activeItems.includes(i.id)));
    }, [activeItems]);

    function showAll() {
        setLimit(data.length);
    }

    function showLess() {
        setLimit(defaultLimit);
    }

    function toggleTag(item) {
        if(activeItems.filter(i => i === item).length > 0) {
            // remove already active item
            setActiveItems(activeItems.filter(i => i !== item));
        } else {
            // add new item
            setActiveItems([...activeItems, item]);
        }
    }

    return (
        <div className="cmpt-drawer">
            <div className="archive__label">{label}</div>
            {visibleData.map(item =>
                <DrawerButton label={item.name} id={item.id} key={item.id} handleClick={toggleTag} isActive={activeItems.includes(item.id)} />
            )}

            {limit < data.length ? (
                <button type="button" onClick={showAll}>Show all</button>
            ) : (
                <button type="button" onClick={showLess}>Show less</button>
            )}
        </div>
    );
}

export default Drawer;
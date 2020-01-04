import React from 'react';
import {Link} from "react-router-dom";

const TabHeadItem = ({toLink, name, className="", ...rest}) => {
    console.log("To link" + toLink);
    return (
        <li className={`tab__head__item ${className}`} {...rest}>
            <Link to={toLink}>{name}</Link>
        </li>
    );
};

export default TabHeadItem;
import React from "react";
import {
    BrowserRouter as Router
} from "react-router-dom";

const Tab = ({children, className="", ...rest}) => {
    return (
        <Router>
            {children}
        </Router>
    );
};

export default Tab;
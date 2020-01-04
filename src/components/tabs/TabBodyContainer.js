import React from 'react';
import {Switch} from "react-router-dom";

const TabBodyContainer = ({children, ...rest}) => {
    console.log(children);
    return <Switch>{children}</Switch>
};

export default TabBodyContainer;
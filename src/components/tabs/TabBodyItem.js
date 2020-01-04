import React from 'react';
import {Switch, Route} from "react-router-dom"

const TabBodyItem = ({children, toPath, ...rest}) => {
    console.log(toPath);
    return <Route exact path={toPath}>{children}</Route>;
};

export default TabBodyItem;
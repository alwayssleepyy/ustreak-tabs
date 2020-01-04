import React from "react";

const DashBoardHead = ({children, className = "", ...rest}) => {
    return <div className={`dashboard__head ${className}`} {...rest}>{children}</div>
}

export default DashBoardHead;
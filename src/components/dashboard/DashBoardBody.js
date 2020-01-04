import React from "react";

const DashBoardBody = ({children, className = "", ...rest}) => {
    return <div className={`dashboard__body ${className}`} {...rest}>{children}</div>
}

export default DashBoardBody;
import React from 'react';

const DashBoard = ({children, className = "", ...rest}) => {
    return <div className={`dashboard ${className}`} {...rest}>{children}</div>
};

export default DashBoard;
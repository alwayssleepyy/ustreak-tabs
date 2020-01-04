import React from 'react';

const TabHeadMenu = ({children, className="", ...rest}) => {
    return (
        <nav className={`tab__head ${className}`} {...rest} >
            <ul>
                {children}
            </ul>
        </nav>
    );
};

export default TabHeadMenu;
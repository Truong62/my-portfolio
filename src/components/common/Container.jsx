import React from 'react';

const Container = ({ children, className = "" }) => {
    return (
        <div className={`max-w-[1300px] my-0 mx-auto ${className} sm:max-w-[385px]`} >
            {children}
        </div>
    );
};

export default Container;
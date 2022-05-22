import React from 'react';

const FocusButton = ({children}) => {
    return (
        <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold">{children}</button>
    );
};

export default FocusButton;
import React from 'react';

const Document = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default Document;
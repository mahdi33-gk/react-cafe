import React from 'react';

const Document = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <p className='p-4 rounded-lg mt-2 text-white text-xl bg-slate-500 font-semibold'>{title}</p>
        </div>
    );
};

export default Document;
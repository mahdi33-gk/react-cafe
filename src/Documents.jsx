import React from 'react';
import Document from './Document';

const Documents = ({bookmarks}) => {
    
    return (
        <div className='md:w-1/3 bg-gray-300 rounded-2xl'>
            <h1 className='text-2xl text-center font-semibold'>Bookmarks length: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Document bookmark={bookmark}></Document>)
            }
        </div>
    );
};

export default Documents;
import React from 'react';
import Document from './Document';

const Documents = ({bookmarks, handlertiming}) => {
    
    
    return (
    
        <div className='md:w-1/3 bg-gray-300'>
            
            <h1 className='text-2xl  font-semibold'>Bookmarks length: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Document handlertiming={handlertiming} bookmark={bookmark}></Document>)
            }
        </div>
    );
};

export default Documents;
import React from 'react';
import Document from './Document';

const Documents = ({bookmarks, handlertiming, readingTime}) => {
    
    
    return (
    
        <div className='md:w-1/3 bg-gray-300'>
             <h1 className='text-2xl p-4 pb-3 border-blue-400 border-2 rounded-lg text-center font-semibold'>Spent time on read: {readingTime}</h1>
            
            <h1 className='text-2xl  font-semibold'>Bookmarks length: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Document key={idx} handlertiming={handlertiming} bookmark={bookmark}></Document>)
            }
        </div>
    );
};

export default Documents;
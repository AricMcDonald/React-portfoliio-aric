import React from 'react';
import {Link} from 'react-router-dom';

function footer({currentPage, handlePageChange}) {

    return (
        <footer className='flex-row space-between px-1' style={{display: 'flex',justifyContent: 'space-between'}}>
            <h2>
                <a href='https://www.linkedin.com/in/aric-mcdonald/' target="_blank">linkedin.com/in/aric-mcdonald</a>
            </h2>
            
        </footer>

    )
}

export default Nav;
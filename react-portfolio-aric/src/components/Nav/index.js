import React from 'react';
import {Link} from 'react-router-dom';

function Nav({currentPage, handlePageChange}) {

    return (
        <header className='flex-row space-between px-1' style={{display: 'flex',justifyContent: 'space-between'}}>
            <h2>
                <a>A.M</a> 
            </h2>
            <nav>
                <ul className='flex-row' style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between'}}>
                    <li style={{padding: '0px 10px'}} className={`${currentPage === 'about' && 'nav-active'}`}>
                        <span
                            onClick={() => handlePageChange('about')}>
                                <a style={{textDecoration: 'none', color: 'green'}} href='/'>About</a>
                        </span>
                    </li>
                    <li style={{padding: '0px 10px'}} className={`${currentPage === 'portfolio' && 'nav-active'}`}>
                        <span
                            onClick={() => handlePageChange('portfolio')}>
                                <a style={{textDecoration: 'none', color: 'green'}} href='/portfolio'>Portfolio</a>
                        </span>
                    </li>
                    <li style={{padding: '0px 10px'}} className={`${currentPage === 'contact' && 'nav-active'}`}>
                        <span
                            onClick={() => handlePageChange('contact')}>
                                <a  style={{textDecoration: 'none', color: 'green'}} href='/contact'>Contact</a>
                        </span>
                    </li>
                    <li style={{padding: '0px 10px'}} className={`${currentPage === 'resume' && 'nav-active'}`}>
                        <span
                            onClick={() => handlePageChange('resume')}>
                                <a style={{textDecoration: 'none', color: 'green'}} href='/resume'>Resumé</a>
                        </span>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Nav;
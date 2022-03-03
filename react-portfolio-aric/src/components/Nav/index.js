import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Nav({currentPage, handlePageChange}) {

    return (
        <header className='flex-row space-between px-1 head' style={{display: 'flex',justifyContent: 'space-between'}}>
            <h2>
                <div>Aric McDonald</div> 
            </h2>
            <nav>
                <ul className='flex-row' style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between'}}>
                    <li style={{padding: '0px 10px'}} className={`${currentPage === 'about' && 'nav-active'}`}>
                        <span
                           >
                                <Link style={{textDecoration: 'none', color: 'green'}} to='/about'>About</Link>
                        </span>
                    </li>
                    <li style={{padding: '0px 10px'}} className={`${currentPage === 'portfolio' && 'nav-active'}`}>
                        <span
                            >
                                <Link style={{textDecoration: 'none', color: 'green'}} to='/portfolio'>Portfolio</Link>
                        </span>
                    </li>
                    <li style={{padding: '0px 10px'}} className={`${currentPage === 'contact' && 'nav-active'}`}>
                        <span
                            >
                                <Link style={{textDecoration: 'none', color: 'green'}} to='/contact'>Contact</Link>
                        </span>
                    </li>
                    <li style={{padding: '0px 10px'}} className={`${currentPage === 'resume' && 'nav-active'}`}>
                        <span
                            >
                                <Link style={{textDecoration: 'none', color: 'green'}} to='/resume'>Resumé</Link>
                        </span>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Nav;
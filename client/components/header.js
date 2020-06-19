import Link from 'next/link';
import { Fragment } from 'react';

export default ({ currentUser }) => {

    return (
        <nav className='navbar navbar-light bg-light '>
            <Link href='/'>
                <a className='navbar-brand'>Tix</a>
            </Link>
            <div className='d-flex justify-content-end'>
                <ul className='nav d-flex align-items-center'>
                    {currentUser ?
                        <div className=' d-flex'>
                            <Link href='/tickets/new'>
                                <a className='nav-link'>Sell Ticket</a>
                            </Link>
                            <Link href='/orders'>
                                <a className='nav-link'>My Orders</a>
                            </Link>
                            <Link href='/auth/signout'>
                                <a className='nav-link'>Sign out</a>
                            </Link>
                        </div>
                        : (<div className=' d-flex'>
                            <Link href='/auth/signin'>
                                <a className='nav-link'>Sign In</a>
                            </Link>
                            <Link href='/auth/signup'>
                                <a className='nav-link'>Sign up</a>
                            </Link>
                        </div>
                        )}
                </ul>
            </div>
        </nav>
    )
};

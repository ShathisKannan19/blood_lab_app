'use client';

import React from 'react';
import Docter from './img/doc-hero.png';
// import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const HomeNavbar = () => {
  const [menu, setMenu] = React.useState(false);

  const handleOpenCloseNav = () => {
    setMenu(!menu);
  }

  const navItems = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'About',
      url: '/about'
    },
    {
      id: 3,
      title: 'Services',
      url: '/services'
    },
    {
      id: 4,
      title: 'Contact',
      url: '/contact'
    }
  ]

  return (
    <>
      <nav className='bg-black'>
        <ul>
          <li className='flex justify-between items-center'>
            <Link href='/'>
              <span className='flex items-center'>
                <Image src={Docter} alt='Docter' width={50} height={50} />
                <p className='text-white'>Blood App</p>
              </span>
            </Link>
            <ul className='flex justify-between'>
          {/* Animate while open the menu */}
          <li className={`flex justify-between ${menu ? "flex" : "hidden"} animate__animated animate__fadeIn`}>
            <ul className='flex items-center'>
              {navItems.map((item) => (
                <li key={item.id} className='text-white px-4'>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
            <button onClick={handleOpenCloseNav} className='text-white'>
              {menu ? 'Close' : 'Menu'}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HomeNavbar;
import firelogo from '../../assets/firelogo.svg'
import { NavLink } from 'react-router-dom'
import { LoginButton } from '../../../auth/LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react';

export default function Header() {
  //const { isAuthenticated } = useAuth0()
  
  return (
    <header>
      <div className='bg-[#1F1D1D] flex mb-auto'>
        <div className='flex-col truncate'>
          <NavLink to='https://www.firehall.net/'>
            <img className='w-[100px] m-5' src={firelogo} alt='fire logo' />
          </NavLink>
        </div>
        <section className='flex items-center mr-auto'>
          <div className='flex-c text-left'>
            <h3 className='text-3xl font-mono text-[#ffffff]'>Firehall.net</h3>
            <p className='text-sm font-mono text-[#ffffff]'>A Valon Technologies Project</p>
          </div>
        </section>
        <div className='flex items-center p-4 gap-10 truncate'>
          <NavLink to='/' className='nav-btn'>
            About Us
          </NavLink>
          <NavLink to='/' className='nav-btn'>
            Features
          </NavLink>
          <NavLink to='/' className='nav-btn'>
            FAQs
          </NavLink>
          <NavLink to='/' className='nav-btn'>
            Contacts
          </NavLink>
          <LoginButton />
        </div>
      </div>
    </header>
  )
}
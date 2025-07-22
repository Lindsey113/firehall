import firelogo from '../../assets/firelogo.svg'
import { NavLink } from 'react-router-dom'
import { LoginButton } from '../../../auth/LoginButton'
import React from 'react';

export default function AuthHeader() {

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
          <NavLink to='/personnel' className='nav-btn'>
            Personnel
          </NavLink>
          <NavLink to='/' className='nav-btn'>
            Equipment
          </NavLink>
          <NavLink to='/' className='nav-btn'>
            Attendance
          </NavLink>
          <NavLink to='/' className='nav-btn'>
            Inspections
          </NavLink>
          <LoginButton />
        </div>
      </div>
    </header>
  )
}
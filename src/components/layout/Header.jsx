import firelogo from '../../assets/firelogo.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className='bg-[#aaa] flex mb-auto'>
          <div className='flex-col'>
            <NavLink to='https://www.firehall.net/'>
              <img className='w-[100px] m-3' src={firelogo} alt='fire logo' />
            </NavLink>
          </div>
        <section className='flex items-center mr-auto'>
          <div className='flex-c text-left'>
          <h3 className='text-3xl font-bold'>Firehall.net</h3>
          <p className='text-sm'>A Valon Technologies Project</p>
        </div>
        </section>
        <div className='flex items-center p-4 gap-10'>
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
        <NavLink to='/' className='nav-btn'>
          Login
        </NavLink>
      </div>
      </div>
      
    </header>
  )
}
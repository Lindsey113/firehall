import firelogo from '../../assets/firelogo.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className='justify-between'>
        <NavLink to='https://www.firehall.net/'>
          <img className='w-[100px]' src={firelogo} alt='fire logo' />
        </NavLink>
      </div>
        </header>
        
    )
}
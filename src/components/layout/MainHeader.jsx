import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo/Logo-1.png'
import logoM from '../../assets/logo/O.B..png'

const MainHeader = () => {
    return (
        <header className='flex justify-between items-center border-b border-black py-6 layout'>
            <div>
                <Link to="/" className='sm:hidden'>
                    <img src={logoM} alt="Our Blooms" width={100} height={30} loading='eager' fetchPriority='high'

                        className='w-full h-6 object-contain '
                    />
                </Link>
                <Link to="/" className='hidden sm:block'>
                    <img src={Logo} alt="Our Blooms" width={100} height={20} loading='eager' fetchPriority='high'
                        className='w-full h-7 object-contain hidden sm:block '
                    />
                </Link>
            </div>
            <div>
                <nav>
                    <ul className='flex gap-4'>
                        <li>
                            <NavLink to="/gallery" className={
                                ({ isActive }) => isActive ? "text-sm font-bold underline underline-offset-4 " : "font-bold text-sm"
                            }>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={
                                ({ isActive }) => isActive ? "text-sm font-bold underline underline-offset-4 " : "font-bold text-sm"
                            }>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={
                                ({ isActive }) => isActive ? "text-sm font-bold underline underline-offset-4 " : "font-bold text-sm"
                            }>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MainHeader;
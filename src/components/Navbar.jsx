import React, { useState } from 'react'
import Logo from '../assets/baraLogo02.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Cv from '../assets/Al-Baraa_Abdo_-_Full_Stack_Developer.pdf'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)




    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#576F72] text-white'>
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: '150px' }} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>


            {/* not mobile */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#7D9D9C] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link></li>
                <li className='py-6 text-4xl' ><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/albaraa-saad/" target="_blank">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/BARAA-201" target="_blank">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#21A18E]'>
                        <a className='flex justify-between items-center w-full text-gray-300'>
                            <Link to="contact" smooth={true} duration={500}>
                                Contact
                            </Link><HiOutlineMail size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8C8D8E]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1ixB3WTrvQJBT8JFeWkelXL9yzaOOyORO/view?usp=sharing' target="_blank" >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
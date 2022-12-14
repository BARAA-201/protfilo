import React, { useState } from 'react'
// import Logo from '../assets/logotest02.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)




    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#678983] via-[#9D9D9D] to-[#79B4B7] text-white'>
            <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/myportfoilo-1108f.appspot.com/o/logotest02.png?alt=media&token=8c229018-ed2a-4126-8504-e91c015d6471' alt="Logo Image" style={{ width: '150px' }} />
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

            <ul className={!nav ? 'hidden' : 'absolute  top-0 left-0 w-full h-screen bg-gradient-to-t  from-[#678983] via-[#9D9D9D] to-[#79B4B7] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link></li>
                <li className='py-6 text-4xl ' ><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link></li>
                <li className=' py-6 text-4xl '><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li className=' py-6 text-4xl '><Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                </Link></li>
                <li className=' py-6 text-4xl md:z-100'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>

                <div className=' flex flex-row mt-20 justify-center space-x-3 items-center'>
                    <li className='py-2 flex justify-between items-center border-2 px-5 border-[#737373] bg-gray-800 hover:scale-105 duration-500  '>
                        <a href="https://www.linkedin.com/in/albaraa-saad/" target="_blank">
                            <FaLinkedin size={30} /><p className='py-2 text-[#faebc1] flex justify-between items-center '>LinkedIn</p>
                        </a>

                    </li>

                    <li className='py-2 flex justify-between items-center border-2 px-5 border-[#737373] bg-gray-800 hover:scale-105 duration-500  '>
                        <a href="https://github.com/BARAA-201" target="_blank">
                            <FaGithub size={30} /><p className='py-2 text-[#faebc1]'>GitHub</p>
                        </a>
                    </li>

                    <li className='py-2 flex justify-between items-center border-2 px-5 border-[#737373] bg-gray-800 hover:scale-105 duration-500'>
                        <a href='https://drive.google.com/file/d/1ixB3WTrvQJBT8JFeWkelXL9yzaOOyORO/view?usp=sharing' target="_blank" >
                            <BsFillPersonLinesFill size={30} /><p className='py-2 text-[#faebc1]'>Resume</p>
                        </a>
                    </li>
                </div>

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
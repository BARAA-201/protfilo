import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <div name="home" className='w-full h-screen  bg-gradient-to-b from-[#FEFBF3] via-[#F8F0DF] to-[#F1F1F1] '>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
                <p className='font-[ArsenicaExtrabold] text-3xl text-[#678983]'>Hi, my name is</p>

                <h1 className='font-[ArsenicaBold] text-4xl py-2 truncate hover:text-clip text-slate-800'>BARAA</h1>

                <h2 className='font-[ArsenicaExtrabold] text-4xl text-[#678983]'>I'm a Full-Stack Web Developer. </h2>

                <p className='font-serif font-bold text-sm max-w-[700px] text-slate-800 py-4'>I'm working as a freelance Full-Stack Web Developer. I'll be happy to help you create your ideal website.</p>

                <Link to="work" smooth={true} duration={500}>
                    <button className='
                 text-slate-800 group border-2 border-[#737373] px-6 py-2 my-2 flex items-center font-[ArsenicaBoldItalic] hover:bg-[#8aaaa4] hover:border-[#8aaaa4] '>
                        <Link to="work" smooth={true} duration={500}>
                            View Work

                        </Link><HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-300' /></button></Link>
            </div>
        </div>
    )
}

export default Home
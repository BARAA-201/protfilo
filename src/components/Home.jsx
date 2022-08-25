import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-[#7D9D9C] '>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
                <p className='font-[ArsenicaExtrabold] text-3xl text-slate-800'>Hi, my name is</p>

                <h1 className='font-[ArsenicaBold] text-4xl py-2 truncate hover:text-clip text-[#E4DCCF]'>BARAA</h1>

                <h2 className='font-[ArsenicaExtrabold] text-4xl text-slate-800'>I'm a Full-Stack Developer. </h2>

                <p className='font-serif font-bold text-sm max-w-[700px] text-slate-100 py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum veritatis quo enim accusantium? Molestias, alias optio repellendus quia ab totam quibusdam aperiam! , facilis dolor, odit iste, rerum mollitia nisi.  voluptatibus est dolorum delectus cum eos rerum soluta impedit assumenda ex voluptates iure facere necessitatibus alias asperiores eum quas. esse temporibus animi. Explicabo molestiae perferendis natus?</p>

                <div>
                    <button className=' text-white group border-2 px-6 py-2 my-2 flex items-center font-[ArsenicaBoldItalic] hover:bg-[#576F72] hover:border-[#576F72] '><Link to="work" smooth={true} duration={500}>
                        View Work
                    </Link> <HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-300' /> </button>
                </div>
            </div>
        </div>
    )
}

export default Home
import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#226469] '>
            <div className=' flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full  grid grid-cols-1 gap-8'>
                    <div className='sm:text-center pb-8 pl-4 text-violet-50'>
                        <p className='text-5xl font-bold inline border-b-4 border-[#737373]'>
                            About Me
                        </p>
                    </div>
                    <div></div>

                </div>

                <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4 sm:text-lift' >
                    <div className=' text-4xl font-bold font-serif text-slate-300'>
                        <p>Hi. I'm Baraa Nice to meet you. Plz take a look around.</p>
                    </div>
                    <div className=' text-lg font-bold font-serif '>
                        <p>voluptatibus est dolorum delectus cum eos rerum soluta impedit assumenda ex voluptates iure facere necessitatibus alias asperiores eum quas. esse temporibus animi. Explicabo molestiae perferendis natus?</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
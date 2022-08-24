import React from 'react'

function Contact() {
    return (
        <div name='contact' className='bg-[#226469] w-full h-screen p-4 flex justify-center items-center'>
            <form method='POST' action='https://getform.io/f/8bfbc047-8d86-49de-afc0-806f9d34a126' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-5xl font-bold inline border-b-4 border-[#737373] text-violet-50'> Contact Me </p>
                    <p className='py-4 text-violet-50 text-lg font-serif'> You can contact me directly to my Email: Albr590@gmail.com </p>
                </div>
                <input className='bg-[#ccd6f5] p-2 font-serif' type="text" placeholder='Name' name='name' />
                <input className='bg-[#ccd6f5] my-4 p-2 font-serif' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f5] p-2 font-serif' name="message" id="" cols="10" rows="10"></textarea>
                <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-slate-400 hover:border-slate-400 font-[ArsenicaBold]'>Send your massage</button>

            </form>
        </div>
    )
}

export default Contact
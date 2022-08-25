import React from 'react'

function Contact() {
    return (
        <div name='contact' className='bg-[#7D9D9C] w-full h-full flex justify-center items-center'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <form method='POST' action='https://getform.io/f/8bfbc047-8d86-49de-afc0-806f9d34a126' className='flex flex-col max-w-[600px] w-full pt-28'>
                    <div className='pb-8'>
                        <p className=' text-5xl font-bold inline border-b-4 border-[#737373] text-slate-800 py-2'> Contact Me </p>
                        {/* <p className='py-6 text-[#F0EBE3] text-lg'> You can contact me directly to my Email: <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}>Albr590@gmail.com</span> </p> */}
                    </div>
                    <input className='bg-gray-300 p-2 font-serif' type="text" placeholder='Name' name='name' />
                    <input className='bg-gray-300 my-4 p-2 font-serif' type="email" placeholder='Email' name='email' />
                    <textarea className='bg-gray-300 p-2 font-serif' name="message" id="" cols="10" rows="10"></textarea>
                    <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#576F72] hover:border-[#576F72] font-[ArsenicaBold]'>Send your massage</button>

                </form>
            </div >
        </div >

        // <div name='contact' className='w-full h-full bg-[#0a192f] '>
        //     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        //         <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full mx-auto pt-28'>
        //             <div className='pb-8'>
        //                 <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
        //                 <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
        //             </div>
        //             <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        //             <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        //             <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        //             <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        //         </form>
        //     </div>
        // </div>
    )
}

export default Contact
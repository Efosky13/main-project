 import React from 'react'
 import Image from 'next/image'
 import Link from 'next/link'
 
 export const metadata = {
  title: "HOME",
  description: "A Web development platform for web developers",
  keywords:'html,tailwind,css,js.javascript,react,next,vite'
};

 export default function page() {
   return (
     <div className=' mx-40'>
       <div className='grid grid-cols- grid-rows-[(2,_300px)] my-20 gap-6 relative'>

        <div className=' row-span-2 col-start-1 col-span-1'>
        <button className='absolute bg-red-300 p-2 text-3xl'><Link href='./Fashion'>Fashion</Link></button>
          <Image className=' overflow-hidden container' src="/media/racing.jpg" width={400} height={400} alt=" AUDI" />

        </div>

        <div className='col-start-2 col-span-2'>
          <button className='absolute bg-blue-400 p-2 text-3xl'><Link href='./'>Luxury</Link></button>
          <Image className='container overflow-hidden' src="/media/fashion.jpg" width={400} height={400} alt="SHOPPING" />
        </div>

        <div className='col-start-2'>
          <button className='absolute p-2 bg-blue-400 text-2xl'><Link href='./'>Model</Link></button>
          <Image className='container overflow-hidden' src="/media/modelling.jpg" width={400} height={400} alt="CARS" />
        </div>
       </div>
       {/* Grid for You */}
       <div></div>
       {/* Grid for You */}
       <div></div>
       {/* Complex grid */}
       <div>
        <div className='grid grid-cols-3'>
            <div className=' col-start-1'>
                  <Image src="/media/technology.jpg" width={400} height={400} alt="" />
            </div>
        </div>
       </div>
     </div>
   )
 }
 
 

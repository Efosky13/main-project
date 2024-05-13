import React from 'react'
import images from './images/Pic 3.png'

console.log(images) 


export default function about() {
  return (
    <div>
         <div className=' text-3xl mt-20'> ABOUT US </div>
           
           <div className='text-xl mt-4  '>
           Welcome to our About page!

At Efosky, we are passionate about giving you the best ideas on gadgets.<br/> Our team is dedicated to providing products,<br/> information and services that benefit or solve a specific problem for your customers.<br/>

Since our establishment in 2024, we have been committed to delivering exceptional quality and customer satisfaction.<br/> We believe in constantly innovating and staying ahead of the curve to meet the evolving needs of our clients.<br/>

Our core values revolve around company's core values, such as integrity, transparency, excellence.<br/> These principles guide us in every aspect of our business operations and interactions with customers, partners, and employees.<br/>

We take pride in creating a positive work environment that fosters creativity, collaboration, and growth.<br/> Our team consists of highly skilled professionals who are experts in their respective fields.<br/> Together, we strive for excellence and continuously seek ways to improve ourselves and the services we offer.<br/>

Customer satisfaction is at the heart of everything we do.<br/> We value each client's trust in us and work tirelessly to exceed their expectations.<br/> Whether it's through personalized solutions tailored to their unique requirements or top-notch customer support,<br/> we aim to build long-lasting relationships based on trust and mutual success.<br/>

Thank you for visiting our About page! If you have any questions or inquries please click on the button below
  
<imG src={images} alt="Logo" width='400' />


           </div>


      
       </div>
  )
  
} 


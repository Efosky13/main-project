import Catlinks from "./Catlinks";
import SocialIcons from "./SocialIcons";
import { AiFillCodepenSquare } from "react-icons/ai";
import PageLinks from "./PageLinks";
import { Dancing_Script } from "next/font/google";
import { GoArrowRight } from "react-icons/go";


export default function Footer() {
  return (
    <footer className="h-[60vh] bg-slate-900 text-white flex gap-20 mt-6 pt-10 ">

    <div className=" capitalize ml-40">
    
        <p className=" text-2xl flex" > <AiFillCodepenSquare/> Efosky
  </p>
        
        <p> welcome to the home of fashion where<br/>
         your comfort is our desire
        </p>
        <SocialIcons />
    </div> 

  <div >
     <h2 className="ml-5 text-2xl ">Categories</h2>
     <div className="m-4 ">
        <Catlinks title="Sport" bg="bg-pink-700 " />
        <Catlinks title="Entertainment" bg="bg-yellow-700"/><br/>
        <Catlinks title="Home and Decor" bg="bg-blue-700"/>
        <Catlinks title="Education" bg="bg-red-700"/><br/>
        <Catlinks title="Travel" bg="bg-yellow-700"/>
        <Catlinks title="Technology" bg="bg-blue-700"/><br/>
        <Catlinks title="Fashion" bg="bg-red-700"/>
     </div>

  </div>

   <div className="captalize"> 
      <h2 className="text-2xl "> Pages </h2>

      <div className="flex items-start  gap-10 mt-3 ">
         <ol>
   
            <PageLinks title='Home' link='/' />
            <PageLinks title='Home 2' link='/'/>
            <PageLinks title='Blog' link='/'/>
            <PageLinks title='Author' link='/authors'/>
            <PageLinks title='Pricing' link='/'/>
            <PageLinks title='About us' link='/about'/>
            <PageLinks title='Subscribe' link='/'/>
            <PageLinks title='Privacy Policy' link='/'/>

           </ol>

           <ol>
           <PageLinks  title='Style Guide' link='/Category' />
           <PageLinks title='Instructions' link='/'/>
           <PageLinks title='Licenses' link='/'/>
           <PageLinks title='Changelog' link='/'/>
           <PageLinks title='login' link='/login'/>
           <PageLinks title='Link In Bio' link='/'/>
           <PageLinks title='Password Protected' link='/'/>
           <PageLinks title='Error 404' link='/'/>


   
           </ol>
           
      </div>


          

      </div>

         <div className=" inline-block ">
            <button className=" text-2xl mb-3"> Subscribe for more</button> <br/>
            <button className="border-2 bg-white p-3 w-60 text-black  text-start flex hover:bg-slate-400 ">
             
                  <div className="flex ">
                  <form id="wf-form-Footer-Subscribe-Form" name="wf-form-Footer-Subscribe-Form" data-name="Footer Subscribe Form" method="get" data-wf-page-id="65798215fefd34b33dd44aa0" data-wf-element-id="f186cf30-17a5-6ed6-37c8-6b48ecf59b23" aria-label="Footer Subscribe Form">
                     <div class="footer-form-wrap">
                           <input class="form-input form-input-footer w-input focus:outline-none bg-transparent" maxlength="256" name="Email-4" data-name="Email 4" placeholder="Enter email" type="email" id="Email-4" required="@"></input>
                        
                     </div>
                    </form>
               
                     <br/>

                      <div className=" text-2xl  bg-inherit  flex">
                           <GoArrowRight />
                     </div> 
                     </div>
                     
                     
               </button>    
               <br/>
                     <h3>  
                        Designed by Frontend developer<br/>
                        Amenaghawon Efosa 
                     </h3>  
         </div>

           
            


   </footer>
)

}
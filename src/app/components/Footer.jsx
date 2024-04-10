import Catlinks from "./Catlinks"
import SocialIcons from "./SocialIcons"
import { AiFillCodepenSquare } from "react-icons/ai";
import PageLinks from "./pagelinks";
import { Dancing_Script } from "next/font/google";


export default function Footer() {
  return (
    <footer className="h-[60vh] bg-slate-900 text-white flex gap-20 mt-6 pt-10 ">

    <div className=" capitalize ml-10">
    
        <p className=" text-2xl flex" > <AiFillCodepenSquare/> Efosky
  </p>
        
        <p> welcome to the home of fashion where<br/>
         your comfort is our desire
        </p>
        <SocialIcons />
    </div> 

  <div className=" ">
     <h2 className="ml-5 text-lg ">Categories</h2>
     <div className="m-4">
        <Catlinks title="Sport" bg="bg-pink-700"/>
        <Catlinks title="Entertainment" bg="bg-yellow-700"/><br/>
        <Catlinks title="Home and Decor" bg="bg-blue-700"/>
        <Catlinks title="Education" bg="bg-red-700"/><br/>
        <Catlinks title="Travel" bg="bg-yellow-700"/>
        <Catlinks title="Technology" bg="bg-blue-700"/><br/>
        <Catlinks title="Fashion" bg="bg-red-700"/>
     </div>

  </div>

   <div className="inline-block">
      <h2 className="text-2xl "> Pages </h2>

      <div className="flex items-start gap-10 mt-3 ">
         <ol>
            <PageLinks title='Home'/>
            <PageLinks title='Home 2'/>
            <PageLinks title='Blog'/>
            <PageLinks title='Author'/>
            <PageLinks title='Pricing'/>
            <PageLinks title='About us'/>
            <PageLinks title='Subscribe'/>
            <PageLinks title='Privacy Policy'/>

           </ol>

           <ol>
           <PageLinks  title='Style Guide' />
           <PageLinks title='Instructions'/>
           <PageLinks title='Licenses'/>
           <PageLinks title='Changelog'/>
           <PageLinks title='Coming Soon'/>
           <PageLinks title='Link In Bio'/>
           <PageLinks title='Password Protected'/>
           <PageLinks title='Error 404'/>


      

           </ol>
      </div>


   </div>

   </footer>
)

}
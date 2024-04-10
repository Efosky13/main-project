
import Link from "next/link";
import Buttons from "./Buttons";
import SocialIcons from "./SocialIcons";
import { AiFillCodepenSquare } from "react-icons/ai";



export default function Navbar() {
  return (
    
    <nav className=" bg-blue-50 text-black h-[10vh] flex justify-between text-3xl capitalize m-1 p-2">
        
        <div className="flex items-center gap-2" >
        <AiFillCodepenSquare className="font bold text-5xl"/>
            <p>EFOSA</p>
        </div>
        <ul className="flex items-center gap-x-5 ">
            <li className=" hover:text-slate-500 hover:underline"><Link href='/'>Home</Link></li>
            <li className=" hover:text-slate-500 hover:underline"><Link href='/pages'>Pages</Link></li>
            <li className=" hover:text-slate-500 hover:underline"><Link href='/about'>About us</Link></li>

        </ul>
        
        <SocialIcons/>

        <div className="flex items-center">
        <Buttons /> 
        </div>
        
</nav>
)
}                                                                                                                                            

import Navbar from "./Components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Aboutus from "./Pages/Aboutus";
import Categories from "./Pages/Categories"
import Services from "./Pages/Services";
import Contactus from "./Pages/Contactus"
import Clients from "./Pages/Clients"
import Home from "./Pages/Home"
import Copycomponents from "./Components/Copycomponents";

export default function app(){
  return(
  <>
<BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path ="/" element={<Home/>}/>
  <Route path ="About us" element={<Aboutus/>}/>
  <Route path ="Categories" element={<Categories/>}/>
  <Route path ="Services" element={<Services/>}/>
  <Route path ="Clients" element={<Clients/>}/>
  <Route path ="Contact us" element={<Contactus/>}/>
  </Routes>
 </BrowserRouter>
 <Copycomponents/>
 
  </>
  )
  
}

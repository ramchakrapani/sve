
import Navbar from "./components/Navbar";
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Clients from './pages/Clients';
import Pricing from './pages/Pricing';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import About from "./pages/About";




export default function App(){


  return(
    <>
   <BrowserRouter>
    
       <Navbar />
      
        <Routes>
        <Route path ="/" element={<Home/>}/>
       <Route path ="About" element={<About/>}/>
       <Route path ="Gallery" element={<Gallery/>}/>
       <Route path ="Services" element={<Services/>}/>
       <Route path ="Testimonials" element={<Testimonials/>}/>
       <Route path ="Clients" element={<Clients/>}/>
       <Route path ="Pricing" element={<Pricing/>}/>
       
        </Routes>
     

    </BrowserRouter>

   
     
   
    </>
  )
};
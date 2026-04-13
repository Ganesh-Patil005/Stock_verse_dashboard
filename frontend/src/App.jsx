import Home from "./landing_page/Home/Home_page";
import {Routes,Route} from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import Support from "./landing_page/support/Support";
import Product from "./landing_page/products/ProductPage";
import Pricing from './landing_page/pricing/Pricingpage';
import About from "./landing_page/about/About_page";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/Notfound';
import  Login  from './landing_page/login/Login';


export default function App(){
  
    
return(     
<>
<Navbar />
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/support' element={<Support/>}></Route>
  <Route path='/pricing' element={<Pricing/>}></Route>
  <Route path='/product' element={<Product/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/login' element = {<Login/>} ></Route>
   <Route path='*' element={<NotFound/>}></Route>
</Routes>
 <Footer />
</>
    
    );
}
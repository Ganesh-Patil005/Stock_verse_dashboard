
import { createRoot } from 'react-dom/client'

import "./index.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Signup from "./landing_page/signup/Signup";
// import Support from "./landing_page/support/Support";
// import Product from "./landing_page/products/ProductPage";
// import Pricing from './landing_page/pricing/Pricingpage';
// import About from "./landing_page/about/About_page";
// import Navbar from './landing_page/Navbar';
// import Footer from './landing_page/Footer';
// import NotFound from './landing_page/Notfound';
// import  Login  from './landing_page/login/Login';
import App from './App';
import { CookiesProvider, useCookies } from 'react-cookie';



createRoot(document.getElementById('root')).render(

<BrowserRouter>
<CookiesProvider><App/></CookiesProvider>

</BrowserRouter>

)

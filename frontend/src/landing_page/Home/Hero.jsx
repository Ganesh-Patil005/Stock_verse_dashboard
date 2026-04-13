import { Link } from "react-router-dom";
export default function Hero (){

    return(
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/homeHero.png" alt="Hero Img" className="mb-5"/>
                <h1 className="mt-5 fs-3">Invest in everything!</h1>
                <p >Online platform to invest in stocks,derivatives,mutual funds and more.</p>
             <Link to="/signup"> <button className="p-2 btn btn-primary fs-5 mb-5" style={{ width:"20%", margin: "0 auto"}}>Signup Now</button> </Link>  
            </div>

        </div>
    );
};
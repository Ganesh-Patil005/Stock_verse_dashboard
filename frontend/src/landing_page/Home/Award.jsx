export default function Award (){

    return(
        <div className="container mb-5">
            <div className="row">
                <div className= "col-6 p-5">
                    <img src="media/largestBroker.svg" alt="Broker"/>
                </div>
                <div className="col-6 p-5">
                     <h1 className="mt-5 fs-3">Largest Stock Broker in India</h1>
                     <p className="mb-5">2+millons clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>

                     <div className="row mt-5">
                         <div className="col-6">
                           <ul>
                        <li><p>Future Options </p></li>
                        <li><p>Stocks & IPos</p></li>
                        <li><p>Commodity derivatives</p></li>   
                           </ul>
                       </div>
                       <div className="col-6">
                           <ul>
                              <li><p>Direct mutual funds</p></li>
                              <li><p>Currency derivatives</p></li>
                              <li><p>Bond & growth</p></li>  
                            </ul>
                       </div>
                     </div>
                     <img className= "mt-3" src="media/pressLogos.png" alt="press logo"/>
                </div>
            </div>

        </div>
    );
};


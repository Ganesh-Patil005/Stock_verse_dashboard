import "./stl.css";
export default function Hero() {
  return (
    <>
    <section className="container-fluid supportwrapper">
      <div className="container supportHero pt-5">
        <h5>Support Portal</h5>
        <a className="trackDetail" href="">Track details</a>
      </div>
    
      <div className="row px-5  mx-5">
           <div className="col-6 p-5">
               <h1 className="fs-3 mb-4">Search for an answer or browse help topics to create a ticket</h1>
               <input className="form-control p-3 mb-4" placeholder="Eg. How do i activate F&O.why is my order getting rejected." style={{width:"100%"}}/>
               <a href="" className="trackDetails">Track account opening</a>
               <a href="" className="trackDetails">Track segment activating</a>
               <a href="" className="trackDetails">Inraday margins</a>
               <a href="" className="trackDetails">kite user manual</a>
                 
          </div>
          <div className="col-6 mt-5" style={{paddingLeft:"100px"}}>
               <h1 className="fs-3 mb-3">Featured </h1>
               <ol>
                <li><a href="" className="trackDetails"> Current Takeovers and Delisting - january-2025</a></li><br></br>
                <li><a href="" className="trackDetails"> latest intraday leverages-MIS & CO</a></li>
               </ol>
          </div>
      </div>
      
      
    </section>
    </>
  );
}

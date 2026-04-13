export default function Stats (){

    return(
       <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-6 mt-5 p-5">
                    <h1 className="mb-5 fs-3">Trust with Confidence</h1>
                    <div className="mt-5">
                        <h3 className="fs-5">Customer first always</h3>
                        <p className="text-muted ">That's why 1.5crore+ customers trust Zerodha with 3.5+crore worthy equivalent investments.</p>
                    </div>
                    <div className="mt-4">
                        <h3  className="fs-5">No spam or gimmisicks</h3>
                        <p className="text-muted "> No gimmisicks,spam,"gamifaction",or annoying push notifications.High quality apps use it in the way you like.</p>
                    </div>
                    <div className="mt-4">
                        <h3  className="fs-5">The Zerodha Universe</h3>
                        <p className="text-muted ">Not just in an app,but whole ecosystem. Our investments in 30+ fintch startups offer u tailered services specific to you needs.</p>
                    </div>
                    <div className="mt-4">
                        <h3  className="fs-5">Do better with money</h3>
                        <p className="text-muted ">with initatives Nudge ludg and kill switch,We don't just facilates transactions,but actuly help you to do better with money.</p>
                    </div>
                </div>
                <div className="col-6 mt-5 ">
                      <img src="media/ecosystem.png" alt="Ecosysytem"style={{width:"90%"}}/>
                      <div>
                        <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our products<i className="fa-solid fa-arrow-right-long"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try kite</a>
                      </div>
                </div>
            </div>
       </div>
    );
};
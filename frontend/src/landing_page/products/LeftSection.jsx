export default function LeftSection({ImageURL,ProductName,ProductDescription,Trydemo,LearnMore,googlePlay,appStore}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col p-5">
          <img src={ImageURL}></img>
        </div>
        <div className="col p-3 mt-5 ms-5">
          <h1
            className=" fs-3  pt-5 text-muted"
            style={{ marginLeft: "2.8rem" }}
          >
           {ProductName}
          </h1>
          <p className="p-5 pt-3 pb-0 text-muted" style={{ fontSize: "1.1em" }}>
            {ProductDescription}<br/><br/>
            {Trydemo && <a href={Trydemo} style={{ textDecorationLine: "none" }}>
              Try demo <i class="fa-solid fa-arrow-right-long"></i>
            </a> }
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {LearnMore &&  <a href={LearnMore} style={{ textDecorationLine: "none" }}>
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a> } 
          </p>
          <div className="row">
            <div className="col ms-5">
            <a href={googlePlay}> <img src="media/googlePlayBadge.svg" /> </a>
            </div>
            <div className="col">
            <a href={appStore}> <img src="media/appstoreBadge.svg" /></a>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

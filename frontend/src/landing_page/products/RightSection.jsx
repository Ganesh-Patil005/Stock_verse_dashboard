export default function RightSection({ProductName,ProductDescription,LearnMore,ImageURL}) {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col p-3 mt-5 ">
          <h1
            className=" fs-3 mt-5  text-muted"
            style={{ marginLeft: "2.8rem", marginTop: "5rem" }}
          >
            {ProductName}
          </h1>
          <p className="p-5 pt-3 text-muted" style={{ fontSize: "1.1em" }}>
            {ProductDescription}
            <br />
            <br />
            <a href={LearnMore} style={{ textDecorationLine: "none" }}>
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </p>
        </div>
        <div className="col">
          <img src={ImageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="row text-muted"
          style={{ lineHeight: "2", fontSize: "1em" }}
        >
          <div className="col-6 p-5 text-center">
            <img
              src="media/nithinKamath.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
            />
            <h5 className="pt-3">Nithin Kamath</h5>
            <p>Founder, CEO</p>
          </div>
          <div className="col-6">
            <h1 className="fs-4 pb-5 ml-5">People</h1>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Homepage
              </a>{" "}
              /{" "}
              <a style={{ textDecoration: "none" }} href="">
                TradingQnA
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Twitter
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

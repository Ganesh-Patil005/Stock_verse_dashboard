export default function Hero (){

    return(
         <div className="container">
        <div className="row p-5 mt-5 mb-5">
          <h1 className="fs-3 text-center ">Pricing</h1>
          <h5 className="text-muted text-center mt-3">
            Free equity investments and flat ₹20 traday and F&O trades.
          </h5>
        </div>

        <div
          className="row p-5 mt-5 mb-5  text-muted text-center"
          style={{ lineHeight: "2", fontSize: "1em" }}
        >
          <div className="col-4 p-4 ">
            <img src="media/pricingEquity.svg" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted mt-3">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="media/intradayTrades.svg" style={{ width: "100%" }} />
            <h1 className="fs-3">Intraday and F&O trade</h1>
            <p className="text-muted mt-3">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity and commodity trades. Flat ₹20 on
              all option trades.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="media/pricingMF.svg" />
            <h1 className="fs-3">Free direct MF</h1>
            <p className="text-muted mt-3">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    );
};
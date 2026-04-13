import {Link} from "react-router-dom";
export default function Universe() {
  return (
    <div className="container">
      <div>
        <h1 className="text-center text-muted fs-3">The Zerodha Universe</h1>
        <p className="text-center text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div class="container text-center p-5">
        <div class="row">
          <div class="col p-3">
            <img src="media/zerodhaFundhouse.png" style={{ width: "58%" }} />
            <p
              className="text-muted pt-3"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              Our asset management venture <br />
              that is creating simple and transparent index
              <br /> funds to help you save for your goals.
            </p>
          </div>
          <div class="col p-3 pt-4">
            <img src="media/sensibullLogo.svg" style={{ width: "58%" }} />
            <p
              className="text-muted pt-4"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              Options trading platform that lets you
              <br /> create strategies,analyze positions,and examine <br />
              data points like open interest ,FII/DII and more
            </p>
          </div>
          <div class="col p-3">
            <img src="media/smallcaseLogo.png" style={{ width: "58%" }} />
            <p
              className="text-muted pt-3"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              Thematic investing platform <br />
              that helps you invest in divrsified <br /> baskets of stocks on
              ETFs.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col p-3 pt-3">
            <img src="media/streakLogo.png" style={{ width: "43%" }} />
            <p
              className="text-muted pt-4"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              Systematic trading platform <br /> that allows you to create and
              backtest <br /> strategies without coding
            </p>
          </div>
          <div class="col p-3 pt-4">
            <img src="media/dittoLogo.png" style={{ width: "30%" }} />
            <p
              className="text-muted pt-4"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              Personalized advice on life
              <br /> and health insurence. No spam <br />
              and no mis-selling.
            </p>
          </div>
          <div class="col p-3 pt-4">
            <img src="media/tijori.svg" style={{ width: "30%" }} />
            <p
              className="text-muted pt-4"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              Investment research platform
              <br /> that offers detailed insights on stocks,
              <br />
              sectors,supply chains,and more.
            </p>
          </div>
        </div>
       <Link to="/signup"> <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button></Link>
      </div>
    </div>
  );
}

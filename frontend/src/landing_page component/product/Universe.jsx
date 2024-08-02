function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-5">
        <h2 className="mb-4">The Zerodha Universe</h2>
        <p className="fs-6 mb-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row d-flex  justify-content-evenly align-items-center">
        <div className="col-4 p-3 mt-1">
          <img src="media\images\smallcaseLogo.png" alt="" />
          <p className="text-muted mt-2 ">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-1">
          <img
            src="media\images\streakLogo.png"
            alt=""
            style={{ height: "55px" }}
          />
          <p className="text-muted mt-2 ">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-1">
          <img
            src="media\images\sensibullLogo.svg"
            alt=""
            style={{ height: "40px" }}
          />
          <p className="text-muted mt-2 ">Options trading platform</p>
        </div>
      </div>
      <div className="row d-flex justify-content-evenly align-items-center">
        <div className="col-4 p-3 mt-3 ">
          <img
            src="media\images\zerodhaFundhouse.png"
            alt=""
            style={{ height: "55px" }}
          />
          <p className="text-muted mt-2 ">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media\images\tijori.svg"
            alt=""
            style={{ height: "55px" }}
          />
          <p className="text-muted mt-2 ">Fundamental research platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media\images\dittoLogo.png"
            alt=""
            style={{ width: "40%" }}
          />
          <p className="text-muted mt-2 ">Insurance</p>
        </div>
      </div>
      <div className="row">
        <button
          className="p-2 btn btn-primary fs-5 my-5"
          style={{ width: "17%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}
export default Universe;

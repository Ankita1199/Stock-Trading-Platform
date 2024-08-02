function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center p-5 mt-5 mb-5 border-bottom ">
        <h1>Pricing</h1>
        <p className="mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>
      <div className="row my-4 p-5">
        <div className="col-4 p-4">
          <img src="media\images\pricingEquity.svg" alt="" className="mb-4" />
          <h3 className="mb-4 fs-4">Free equity delivery</h3>
          <p className="text-muted lh-lg">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\images\intradayTrades.svg" alt="" className="mb-4"/>
          <h3 className="mb-4 fs-4">Intraday and F&O trades</h3>
          <p className="text-muted lh-lg">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\images\pricingEquity.svg" alt="" className="mb-4"/>
          <h3 className="mb-4 fs-4">Free direct MF</h3>
          <p className="text-muted lh-lg">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

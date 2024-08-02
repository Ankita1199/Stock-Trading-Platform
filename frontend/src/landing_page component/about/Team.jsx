function Team(){
    return(
        <div className="container">
      <div className="row p-2 mt-2">
        <h1 className=" text-center text-muted">
          People
        </h1>
      </div>

      <div className="row p-5 mb-5  text-muted" style={{lineHeight:"1.8", fontSize:"1.1em"}}>
        <div className="col text-center">
            <img src="media\images\nithinKamath.jpg" alt="" className="rounded-circle" style={{width:"55%"}}/>
            <h5 className="mt-4">Nithin Kamath</h5>
            <h6 className="mt-4">Founder, CEO</h6>
        </div>
        <div className="col">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href="" className="text-decoration-none">Homepage</a> / <a href="" className="text-decoration-none">TradingQnA</a> / <a href="" className="text-decoration-none">Twitter</a></p>
        </div>
      </div>

    </div>
    )
}

export default Team;
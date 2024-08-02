function Hero(){
    return(
        <section className="container-fluid" id="supportHero">
            <div className=" py-5" id="supportWrapper">
                <h5>Support Portal</h5>
                <a href="" style={{fontSize:"18px"}}>Track Tickets</a>

            </div>
            <div className=" row p-3  mx-5 " >
                <div className="col-6 p-3 mb-5">
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <input type="text" placeholder="Eg. how do I activate F&O" className="my-4"/><br />
                    <a href=""  style={{margin:"0 20px 15px 0", fontSize:"16px"}}>Track account opening</a>
                    <a href="" style={{margin:"0 20px 15px 0", fontSize:"16px"}}>Track segment activation</a> 
                    <a href="" style={{margin:"0 20px 15px 0", fontSize:"16px"}}>Intraday margins</a><br />
                    <a href="" style={{margin:"0 20px 15px 0", fontSize:"16px"}}>Kite user manual</a>
                </div>
                <div className="col-6 p-3 mb-5 mt-3">
                    <h4>Featured</h4>
                    <ol>
                        <li><a href="" style={{lineHeight:"45px"}}>Surveillance measure on scrips - July 2024</a><br /></li>
                        <li><a href="" style={{lineHeight:"45px"}}>Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                    

                </div>
            </div>

        </section>
    )
}

export default Hero;
import React from 'react';
function Hero(){
    return(
        <div className='container text-center mb-5 p-5 '>
            <div className="row">
                <img src="/media/images/homeHero.png" alt="hero image" className='mb-5'/>
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>online platforms to invest in stock, derivatives, mutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>

            </div>
        </div>

    )
}

export default Hero;
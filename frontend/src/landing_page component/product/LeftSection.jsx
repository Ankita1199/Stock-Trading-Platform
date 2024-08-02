function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-6 p-5 ">
            <img src={imageUrl} alt="" />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5">
            <h1 className="mb-4">{productName}</h1>
            <p  className="mb-4" style={{lineHeight:"25px"}}>{productDescription}</p>
            <div className="mb-4">
            <a href={tryDemo} style={{marginRight:"50px"}}>Try demo</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn more</a>
            </div>
<div>
<a href={googlePlay}>
                <img src="media\images\googleplayBadge.svg" alt="" />
            </a>
            <a href={appStore} style={{marginLeft:"40px"}}>
                <img src="media\images\appstoreBadge.svg" alt="" />
            </a>
</div>
            
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

function RightSection({
  imageUrl,
  productName,
  productDescription,
  productLink,
}) {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-5 p-5 mt-5">
          <h1 className=" mt-5 mb-4">{productName}</h1>
          <p>{productDescription}</p>
          <a href={productLink}>Learn More</a>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

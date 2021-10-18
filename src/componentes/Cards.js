import './Cards.css';


function Cards(
    {id,
    history,
   image,
    rating,
    reviews,
    mobile,
    specs,
    actual_price,
    after_discount}) {
  
   const redirect = () => {
  history.push( `/producto/${id}`);
   }

    return (
   <>
      <div className="card">
        <div className="card-img">
          <img src={image} alt="mobile" />
        </div>
        <div className="card-body">
          <div className="left">
            <p className="bold">{mobile}</p>
            <p>
              {rating}  |{" "}
              {reviews}
            </p>
            <p>{specs}</p>
            <p>
               <span>{after_discount}</span> |{" "}
              <span>
                <strike>{actual_price}</strike>
              </span>
            </p>
          </div>
          <button className="btn" onClick={ redirect } >Add To Cart</button>
        </div>
      </div>
    </>
        
      );
}

export default Cards;
import './Cards.css';


function Cards(
    {id,
    history,
   image,
    mobile,
    actual_price,}) {
  
   const redirect = () => {
  history.push( `/producto/${id}`);
   }

    return (
   <>
      <div className="card">
        <div className="card-img">
          <img onClick={ redirect } src={image} alt="mobile" />
        </div>
        <div className="card-body">
          <div className="left">
            <p onClick={ redirect } className="bold">{mobile}</p>
              <span className='price'>
              {'$'+actual_price}
              </span>
              <br></br>
              <br></br>
              <span className='disp'>
                Envio Gratis
              </span>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
        
      );
}

export default Cards;

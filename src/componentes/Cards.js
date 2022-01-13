import "./Cards.scss";

function Cards({ id, history, image ,domicilio, mobile, actual_price }) {
  const redirect = () => {
    history.push(`/producto/${id}`);
  };
  return (
    <>
      <div className="card" onClick={redirect}>
        <div className="card-img">
       <img src={image} alt="mobile" />   
        </div>
        <div className="card-body">
          <div className="left">
            <h2 className="bold">{mobile}</h2>
            <br></br>
            <span className="priceproductos">{"$" + actual_price}</span>

            <br></br>

            {(domicilio === 'true')?
              <span className="disp">Envio Gratis</span>:null
              }
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

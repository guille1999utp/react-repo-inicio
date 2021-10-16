import "./Listprod.css";
import Cards from "./Cards";
import FilterCard from "./FilterCard";


export default function Listprod() {
  const cards = [
    {
      id: 1,
      image: "https://mfiles.alphacoders.com/849/thumb-849315.jpg",
      rating: 4.3,
      star: "fas fa-star-half-alt",
      reviews: 453,
      mobile: "MI A3",
      specs: "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB ",
      actual_price: 14999,
      after_discount: 12999
    },
    {
      id: 2,
      image:'https://mfiles.alphacoders.com/849/thumb-849315.jpg',
      rating: 4.3,
      star: "fas fa-star-half-alt",
      reviews: 453,
      mobile: "Realme 7 Pro",
      specs: "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB ",
      actual_price: 17999,
      after_discount: 16999
    },
    {
      id: 3,
      image:'https://mfiles.alphacoders.com/849/thumb-849315.jpg',
      rating: 4.3,
      star: "fas fa-star-half-alt",
      reviews: 453,
      mobile: "Samsung M40",
      specs: "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB ",
      actual_price: 14999,
      after_discount: 13999
    },
    {
      id: 4,
      image: 'https://mfiles.alphacoders.com/849/thumb-849315.jpg',
      rating: 4.3,
      star: "fas fa-star-half-alt",
      reviews: 453,
      mobile: "Oneplus 9T",
      specs: "8 GB RAM | 256 GB ROM | Expandable Upto 256 GB ",
      actual_price: 24999,
      after_discount: 21999
    },  {
        id: 3,
        image:'https://mfiles.alphacoders.com/849/thumb-849315.jpg',
        rating: 4.3,
        star: "fas fa-star-half-alt",
        reviews: 453,
        mobile: "Samsung M40",
        specs: "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB ",
        actual_price: 14999,
        after_discount: 13999
      },  {
        id: 3,
        image:'https://mfiles.alphacoders.com/849/thumb-849315.jpg',
        rating: 4.3,
        star: "fas fa-star-half-alt",
        reviews: 453,
        mobile: "Samsung M40",
        specs: "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB ",
        actual_price: 14999,
        after_discount: 13999
      },  {
        id: 3,
        image:'https://mfiles.alphacoders.com/849/thumb-849315.jpg',
        rating: 4.3,
        star: "fas fa-star-half-alt",
        reviews: 453,
        mobile: "Samsung M40",
        specs: "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB ",
        actual_price: 14999,
        after_discount: 13999
      },  {
        id: 3,
        image:'https://mfiles.alphacoders.com/849/thumb-849315.jpg',
        rating: 4.3,
        star: "fas fa-star-half-alt",
        reviews: 453,
        mobile: "Samsung M40",
        specs: "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB ",
        actual_price: 14999,
        after_discount: 13999
      },
  ];
  return (
  <>
    <div className='pagineCard'>
    <FilterCard className='filtercard'>
     
     </FilterCard> 
    <div className="Cardcompleta">
      <h1 className='margin-bottom'>Productos Encontrados</h1>
      <div className="flex">
        {cards.map((card) => (
          <Cards key={card.id} image={card.image} rating={card.rating} reviews={card.reviews} mobile={card.mobile} specs={card.specs} actual_price={card.actual_price} after_discount={card.actual_price} />
        ))}
      </div>
    </div>
    </div>
    </>
  );
}
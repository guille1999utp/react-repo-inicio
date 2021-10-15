import './Listprod.css';
import {Glider} from 'glider-js'
function Listprod() {
    new Glider(document.querySelector('.glider'));

  return (
    <>
    <div className="glider">
  <div> 1 </div>
  <div> 2 </div>
  <div> 3 </div>
  <div> 4 </div>
  <div> 5 </div>
  <div> 6 </div>
</div>
    </>
  );
}

export default Listprod;

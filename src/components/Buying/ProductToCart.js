import Quantity from "./Quantity"
import Counter from "../ImagesFetch/Counter"
import ProductInCart from "./ProductInCart"

const ProductToCart = (props) => {
  return (
    <div className='mains'>
      <div className='mains__products'>
        <ProductInCart
          name={props.name}
          img={props.img}
          discription={props.discription}
        />

        <div className='mains__products--total'>
          <div className='mains__products--total--quantity'>
            <Quantity />
          </div>
          <div className='mains__products--total--price'>
            <button class='buy'>Process payment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductToCart

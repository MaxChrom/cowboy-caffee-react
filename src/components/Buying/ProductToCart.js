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
          price={props.price}
          totalPrice={props.totalPrice}
        />

        <div className='mains__products--total'>
          <div className='mains__products--total--quantity'>
            {/* <Quantity price ={props.price}/> */}
          </div>
          <div className='mains__products--total--price'></div>
        </div>
      </div>
    </div>
  )
}

export default ProductToCart

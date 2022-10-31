import Counter from "../ImagesFetch/Counter"

const ProductInCart = (props) => {
  return (
    <>
      <div className='mains__products--img'>
        <Counter img={props.img} />
      </div>
      <div className='mains__products--disription'>
        <h2>{props.name}</h2>
        <p>{props.discription}</p>
      </div>
    </>
  )
}
export default ProductInCart

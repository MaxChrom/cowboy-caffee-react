import Buy from "../../Buying/Buy"
import Counter from "../../ImagesFetch/Counter"

const ProductItems = (props) => {
  return (
    <div class='main__coffee-cards__card card'>
      <h2>{props.name}</h2>
      <Counter img={props.img} />
      <p class='main__coffee-cards__card__flavor'>{props.flavor}</p>
      <p class='main__coffee-cards__card__description'>{props.discription}</p>
      <Buy name={props.name} img={props.img} discription={props.discription} />
    </div>
  )
}

export default ProductItems

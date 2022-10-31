import ProductItems from "./Products items /ProductItems"
const Product = (props) => {
  return (
    <ProductItems
      name={props.name}
      img={props.img}
      flavor={props.flavor}
      discription={props.discription}
    />
  )
}

export default Product

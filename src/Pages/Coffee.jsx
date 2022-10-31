import React from 'react';
import "../style/Coffee.scss"
import "../style/Button.scss"
import Product from '../components/Coffee/Product';
import ProductsInfo from '../components/Coffee/Products items /ProductsInfo';

function Coffee() {
    
    return (
        <section class='main'>
        <ProductsInfo/>
        <div class='main__coffee-cards'>
            <Product name = "Quejina (Guatemala)" img = "quejina" flavor="redcurrant/honeysuckle/juicy" discription="Fruity redcurrant and sweet honeysuckle flavours. An incredibly juicy coffee which we struggled to decide on the right berry descriptor, but raspberry, blackberry and blueberry were also in the running!"/>

            <Product name ="Mormora (Ethiopia)" img ="mormora" flavor="blackberry/orange/silky" discription="Fruity, sweet notes of dried mango, strawberry and passionfruit sit alongside a delicious creamy mouthfeel making this a tasty summer Ethiopian, hot or cold."/>

            <Product name ="Kamwangi (Kenya)" img ="kamwangi" flavor="redcurrant/honeysuckle/juicy" discription="This is one fruit filled espresso! From citrus fruits, such as orange, grapefruit and clementine, to berries of the black, blue and
            red variety, this is fruit turned up to 11, all wrapped up in a
            silky smooth body."/>

            <Product name ="Decaf Espresso (El Salvador)" img ="espresso" flavor="caramel/apple/cinnamon" discription="This is a single origin espresso from San Carlos in El Salvador, think sweet caramel and apple notes alongside sprinklings of
            cinnamon in the finish."/>
        </div>
        </section>
    )
}

export default Coffee;
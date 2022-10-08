import React from 'react';
import "../style/Coffee.scss"

function Coffee() {
    return (
        <section class="main">
            <div class="main__top-info">
                <h1 class="main__top-info__h1">Coffee</h1>
                <div class="main__top-info__text">
                We work with specialty coffee from current crops which is carefully
                roasted. Our coffee is fruity, juicy and never boring. We bring you
                the best from leading european specialty roasteries, currently mostly
                from
                <a href="https://shop.squaremilecoffee.com/"
                    >Square Mile Coffee Roasters</a
                >, a multi award winning coffee roasting company based in East London.
                </div>
                <div class="main__top-info__subtext">
                You can currently buy these beans in 350g bags.
                </div>
            </div>
            <div class="main__coffee-cards">
                <div class="main__coffee-cards__card card">
                    <h2>Quejina (Guatemala)</h2>
                    <img src="img/smcr-quejina.jpg" alt="Quejina coffee" />
                    <p class="main__coffee-cards__card__flavor">
                        redcurrant/honeysuckle/juicy
                    </p>
                    <p class="main__coffee-cards__card__description">
                        Fruity redcurrant and sweet honeysuckle flavours. An incredibly
                        juicy coffee which we struggled to decide on the right berry
                        descriptor, but raspberry, blackberry and blueberry were also in the
                        running!
                    </p>
                </div>

                <div class="main__coffee-cards__card card">
                    <h2>Mormora (Ethiopia)</h2>
                    <img src="img/smcr-mormora.jpg" alt="Mormora coffee" />
                    <p class="main__coffee-cards__card__flavor">
                        blackberry/orange/silky
                    </p>
                    <p class="main__coffee-cards__card__description">
                        Fruity, sweet notes of dried mango, strawberry and passionfruit sit
                        alongside a delicious creamy mouthfeel making this a tasty summer
                        Ethiopian, hot or cold.
                    </p>
                </div>

                <div class="main__coffee-cards__card card">
                    <h2>Kamwangi (Kenya)</h2>
                    <img src="img/smcr-kamwangi.jpg" alt="Kamwangi coffee" />
                    <p class="main__coffee-cards__card__flavor">
                        redcurrant/honeysuckle/juicy
                    </p>
                    <p class="main__coffee-cards__card__description">
                        This is one fruit filled espresso! From citrus fruits, such as
                        orange, grapefruit and clementine, to berries of the black, blue and
                        red variety, this is fruit turned up to 11, all wrapped up in a
                        silky smooth body.
                    </p>
                </div>

                <div class="main__coffee-cards__card card">
                    <h2>Decaf Espresso (El Salvador)</h2>
                    <img src="img/smcr-decaf-espresso.jpg" alt="Decaf Espresso coffee" />
                    <p class="main__coffee-cards__card__flavor">caramel/apple/cinnamon</p>
                    <p class="main__coffee-cards__card__description">
                        This is a single origin espresso from San Carlos in El Salvador,
                        think sweet caramel and apple notes alongside sprinklings of
                        cinnamon in the finish.
                    </p>
                </div>
            </div>
    </section>
    )
}

export default Coffee;
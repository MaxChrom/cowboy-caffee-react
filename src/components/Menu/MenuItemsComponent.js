import MenuItem from "./MenuItem"

const MenuItemsComponent = (props) => {
  return (
    <div class='menu__1--espresso'>
      <div>
        <h3>ESPRESSO COFFEE</h3>
      </div>
      <div class='menu__1--espresso espresso'>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Espresso' price='3.8' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Doulespresso' price='4.9' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Americano' price='5' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Espresso machiato' price='4.3' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Cappuchino' price='5.2' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Flat white' price='5.9' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Extra shot' price='1.1' />
        </div>
      </div>
    </div>
  )
}
export default MenuItemsComponent

{
  /* <div class='menu__1--espresso'>
      <div>
        <h3>ESPRESSO COFFEE</h3>
      </div>
      <div class='menu__1--espresso espresso'>
        <div class='menu__1--espresso espresso1'>
          <h4>Espresso</h4>
          <p>3.8</p>
        </div>
        <div class='menu__1--espresso espresso2'>
          <h4>Doulespresso</h4>
          <p>4.9</p>
        </div>
        <div class='menu__1--espresso espresso3'>
          <h4>Americano</h4>
          <p>5</p>
        </div>
        <div class='menu__1--espresso espresso4'>
          <h4>Espresso machiato</h4>
          <p>4.3</p>
        </div>
        <div class='menu__1--espresso espresso5'>
          <h4>Cappuchino</h4>
          <p>5.2</p>
        </div>
        <div class='menu__1--espresso espresso6'>
          <h4>Flat white</h4>
          <p>5.9</p>
        </div>
        <div class='menu__1--espresso espresso7'>
          <h4>Extra shot</h4>
          <p>1.1</p>
        </div>
      </div>
    </div> */
}

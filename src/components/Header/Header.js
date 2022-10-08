// import logo from "../style/img/logo.svg"
import HeaderLogo from "./HeaderLogo"
const Header = () => {
  return (
    <header>
      <nav class='header'>
        <HeaderLogo />
        <nav class='header_menu'>
          <p class='header_menu-text header_menu-text_selected'>
            <a href='/index.html'>Home</a>
          </p>
          <p class='header_menu-text'>
            <a href='/menu.html'>Menu</a>
          </p>
          <p class='header_menu-text'>
            <a href='/coffee.html'>Coffee</a>
          </p>
          <p class='header_menu-text'>
            <a href='/story.html'>Our Story</a>
          </p>
        </nav>
      </nav>
    </header>
  )
}

export default Header

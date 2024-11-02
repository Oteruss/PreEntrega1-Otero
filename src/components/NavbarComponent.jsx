import CartWidget from "./CartWidget"


const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <a className="aLink">Shop</a>
            <a className="aLink">Nuevos ingresos</a>
            <a className="aLink">Ofertas</a>
            <a className="aLink">Más vendidos</a>
            <CartWidget counter={15}/>

        </nav>
    )
}

export default NavbarComponent
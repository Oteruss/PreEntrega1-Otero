import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";

const CartWidget = (props) => {
    console.log(props) 
    return (
        <div className="cartWidgetContainer">
            <BsCart4 fontSize={'1.5rem'}/>
            <Badge bg="danger">15</Badge>
            {/* <p className="cartCounter">5</p> */}
        </div>
    )
}


export default CartWidget
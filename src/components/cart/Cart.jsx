import "./cart.css";
import { MdAccessTime } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";

const Cart = ({ img }) => {
  return (
    <div className="cart">
      <img src={img} alt="" />
      <div className="cart-top">
        <IoPricetagsOutline />
        <p className="cart-hashtag">#Nature</p>
      </div>
      <p className="cart-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet
        commodi delectus rem corrupti debitis adipisci asperiores non, culpa
        iure. Aspernatur et perspiciatis excepturi atque iste provident sit
        cumque voluptatum.
      </p>
      <div className="cart-bottom">
        <MdAccessTime />
        <p className="cart-time">04.07.2025</p>
      </div>
    </div>
  );
};
export default Cart;

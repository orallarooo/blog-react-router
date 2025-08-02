import './cart.css'

import { MdAccessTime } from 'react-icons/md'
import { IoPricetagsOutline } from 'react-icons/io5'

const Cart = ({ img, hashtag, title, text, time }) => {
  return (
    <div className="cart">
      <img src={img} alt="" />
      <div className="cart-top">
        <IoPricetagsOutline />
        <p className="cart-hashtag">{hashtag}</p>
      </div>
      <h3 className="cart-title">{title}</h3>
      <p className="cart-text">{text}</p>
      <div className="cart-bottom">
        <MdAccessTime />
        <p className="cart-time">{time}</p>
      </div>
    </div>
  )
}
export default Cart

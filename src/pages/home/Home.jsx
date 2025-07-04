import "./home.css";
import Cart from "../../components/cart/Cart";

import { data_cart } from "../../assets/data/data";



export const Home = () => {
  return (
    <>
    <section className="home-page">
      <div className="home-inner">
        <div className="home-top">
          <p className="home-top_text">
            One usually dislikes a play while writing it, but afterward it grows
            on one. Let others judge and make decisions.
          </p>
          <h2>Anton Chekhov</h2>
        </div>

        <div className="boxes">
          {data_cart.map((post) => {
            return <Cart key={post.id} img={post.image} hashtag={post.hashtag} title={post.title} text={post.text} time={post.date} />
          })}
        </div>
      </div>
    </section>
    </>
  );
};



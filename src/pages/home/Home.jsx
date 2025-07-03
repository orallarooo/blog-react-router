import "./home.css";
import Cart from "../../components/cart/Cart";

import img_1 from "../../assets/images/1.jpg";
import img_2 from "../../assets/images/2.jpg";
import img_3 from "../../assets/images/3.jpg";
import img_4 from "../../assets/images/4.jpg";
import img_5 from "../../assets/images/5.jpg";
import img_6 from "../../assets/images/6.jpg";
import img_7 from "../../assets/images/7.jpg";
import img_8 from "../../assets/images/8.jpg";

const Home = () => {
  return (
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
          <Cart img={img_6} />
          <Cart img={img_7} />
          <Cart img={img_8} />
          <Cart img={img_1} />
          <Cart img={img_2} />
          <Cart img={img_3} />
          <Cart img={img_4} />
          <Cart img={img_5} />
        </div>
      </div>
    </section>
  );
};

export default Home;

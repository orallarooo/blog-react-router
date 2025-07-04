import { data_cart } from "../../assets/data/data";
import { LeftBox } from "../../components/leftBox/LeftBox";
import "./articles.css";

export const Articles = () => {
  return (
    <>
      <section className="articles-page">
        <div className="articles-page__inner">
          <div className="articles-page__left">
              <h3 className="articles-page__left-title">Articles:</h3>
              {data_cart.map((post) => {
            return <LeftBox key={post.id} img={post.image} hashtag={post.hashtag} title={post.title} text={post.text} time={post.date} />
          })}  
          </div>

          <div className="articles-page__body">
            <h1 className="articles-page__title">{data_cart[0].title}</h1>
            <p className="articles-page__hashtag">{data_cart[0].hashtag}</p>
            <img
              className="articles-page__img"
              src={data_cart[5].image}
              alt=""
            />
            <p className="articles-page__text">{data_cart[0].text}</p>
          </div>
        </div>
      </section>
    </>
  );
};

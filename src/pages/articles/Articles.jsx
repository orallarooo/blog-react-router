import { useParams } from "react-router";
import { data_cart } from "../../assets/data/data";
import { LeftBox } from "../../components/leftBox/LeftBox";
import { Link } from "react-router";

import "./articles.css";

export const Articles = () => {
  const {id} = useParams();
  

  return (
    <>
      <section className="articles-page">
        <div className="articles-page__inner">
          <div className="articles-page__left">
              <h3 className="articles-page__left-title">Articles:</h3>
              {data_cart.map((post) => {
                return (
                  <Link key={post.id} to={`/articles/${post.id}`}>
                    <LeftBox key={post.id} img={post.image} hashtag={post.hashtag} title={post.title} text={post.text} time={post.date} />
                  </Link>
                )
              })}  
          </div>

          

          <div className="articles-page__body">
              {id}
            <h1 className="articles-page__title">{data_cart[id].title}</h1>
            <p className="articles-page__hashtag">{data_cart[id].hashtag}</p>
            <img
              className="articles-page__img"
              src={data_cart[id].image}
              alt=""
            />
            <p className="articles-page__text">{data_cart[id].text}</p>
          </div>
        </div>
      </section>
    </>
  );
};

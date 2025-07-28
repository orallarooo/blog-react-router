import { useState } from "react";
import { useParams } from "react-router";
import { LeftBox } from "../../components/leftBox/LeftBox";
import { Link } from "react-router";

import "./articles.css";
// import { BtnDelete } from "../../components/btnDelete/btnDelete";
import { FaPlusSquare } from "react-icons/fa";

import { useArticlesStore } from "../../assets/store/store";
import ModalAddArticle from "../../components/modalAddArticle/ModalAddArticle";

export const Articles = () => {
  const { articles } = useArticlesStore();
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  if (!id) {
    return <p>Empty!!</p>;
  }


  // find article
  const item = articles.find((i) => i.id === +id);

  
  

  return (
    <>
      <section className="articles-page">
        <div className="articles-page__inner">
          <div className="articles-page__left">
            <h3 className="articles-page__left-title">Articles:</h3>
            {articles.map((post) => {
              return (
                <Link key={post.id} to={`/articles/${post.id}`}>
                  <LeftBox
                    key={post.id}
                    img={post.image}
                    hashtag={post.hashtag}
                    title={post.title}
                    text={post.text}
                    time={post.date}
                  />
                </Link>
              );
            })}
          </div>

          <ModalAddArticle isOpen={isOpen} onClose={() => setIsOpen(false)}/>

          {!item ? (
            "Article deleted"
          ) : (
            <div className="articles-page__body">
              <div className="articles-page__body-box">
                <h1 className="articles-page__title">{item.title}</h1>
                <button
                  className="articles-page__btn"
                  isOpen={isOpen}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <FaPlusSquare /> Добавить статью
                </button>
              </div>

              <p className="articles-page__hashtag">{item.hashtag}</p>
              <img className="articles-page__img" src={item.image} alt="" />

              {/* <BtnDelete onClick={() => deleteArticle(item.id)} /> */}

              <p className="articles-page__text">{item.text}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

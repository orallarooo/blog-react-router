import { useParams } from "react-router";
// import { data_cart } from "../../assets/data/data";
import { LeftBox } from "../../components/leftBox/LeftBox";
import { Link } from "react-router";

import "./articles.css";
import BtnDelete from "../../components/btnDelete/btnDelete";

import { useArticlesStore } from "../../assets/store/store";

export const Articles = () => {
   const { id } = useParams();

   if (!id) {
      return <p>Empty!!</p>;
   }

   // zustand
   const { articles, deleteArticle } = useArticlesStore();

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

               {!item ? (
                  "Article deleted"
               ) : (
                  <div className="articles-page__body">
                     <h1 className="articles-page__title">{item.title}</h1>
                     <p className="articles-page__hashtag">{item.hashtag}</p>
                     <img
                        className="articles-page__img"
                        src={item.image}
                        alt=""
                     />

                     <BtnDelete onClick={() => deleteArticle(item.id)} />

                     <p className="articles-page__text">{item.text}</p>
                  </div>
               )}
            </div>
         </section>
      </>
   );
};

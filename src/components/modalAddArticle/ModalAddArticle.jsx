import { useState } from "react";
import { useArticlesStore } from "../../assets/store/store";
import { IoMdCloseCircleOutline } from "react-icons/io";

import "./modalAddArticle.css";

export default function ModalAddArticle({ isOpen, onClose }) {
  // добавить артикл
  const addArticle = useArticlesStore((state) => state.addArticle);

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addArticle(formData);

    console.log(formData);

    // Очистить форму после добавления
    setFormData({
      title: "",
      image: "",
      text: "",
    });

    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <div className={isOpen ? "overflow active" : "overflow"}></div>
      <form
        onSubmit={handleSubmit}
        className={isOpen ? "add-article-form active" : "add-article-form"}
      >
        <div className="form_box">
          <h2>Добавить новую статью</h2>
          <button onClick={onClose}>
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="title">Заголовок:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Изображение (ссылка):</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hashtag">Хештег:</label>
          <select
            id="hashtag"
            name="hashtag"
            value={formData.hashtag}
            onChange={handleChange}
          >
            <option value="">Выберите категорию</option>
            <option value="#tech">Технологии</option>
            <option value="#business">Бизнес</option>
            <option value="#lifestyle">Образ жизни</option>
            <option value="#science">Наука</option>
            <option value="#other">Другое</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="text">Содержание:</label>
          <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            rows="6"
          />
        </div>

        <button type="submit" className="submit-btn">
          Добавить статью
        </button>
      </form>
    </>
  );
}

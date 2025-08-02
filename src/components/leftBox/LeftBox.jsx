import './leftBox.css'

export const LeftBox = ({ img, hashtag, title, text }) => {
  return (
    <div className="left-box">
      <img className="left-box__img" src={img} alt="" />
      <p className="left-box__hashtag">{hashtag}</p>
      <h3 className="left-box__title">{title}</h3>
      <p className="left-box__text">{text}</p>
    </div>
  )
}

import './index.css'

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className, id} = cardData
  return (
    <div className={`${className}card-container`>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </div>
  )
}

export default Card

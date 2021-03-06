import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CourseCard = ({id,title, image,price, professor, imageProfessor}) => (
<article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <Link to={`/cursos/${id}`}>
      <img src={image} alt={title}/>
      </Link>
    </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
     {title}
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src={imageProfessor} alt={professor}/>
          </div>
        </div>
        <span className="small">{professor}</span>
      </div>
    </div>
    <div className="s-main-center">
<a className="button--ghost-alert button--tiny" href="www.google.com.co">{`$ ${price} USD`} </a>
    </div>
  </div>
</article>
)

CourseCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    professor: PropTypes.string,
    imageProfessor: PropTypes.string
}

CourseCard.defaultProps = {
    id: -1,
    title: "No hay titulo",
    image: "https://onlinezebra.com/wp-content/uploads/2019/01/error-404-not-found.jpg",
    price: "--",
    professor: "Sin profesor",
    imageProfessor: "https://onlinezebra.com/wp-content/uploads/2019/01/error-404-not-found.jpg"

}


export default CourseCard;
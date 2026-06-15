import PropTypes from 'prop-types'
import starActive from '../../assets/icons/star-active.svg'
import starInactive from '../../assets/icons/star-inactive.svg'
import '../../styles/components/logementDetails/Rating.css'

function Rating({ rating }) {
  const ratingValue = Number(rating)
  const maxRating = 5

  return (
    <div className="logementRating" aria-label={`Note ${ratingValue} sur ${maxRating}`}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const starNumber = index + 1
        const starIcon = starNumber <= ratingValue ? starActive : starInactive

        return (
          <img
            key={starNumber}
            src={starIcon}
            alt=""
            aria-hidden="true"
            className="logementRatingStar"
          />
        )
      })}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
}

export default Rating

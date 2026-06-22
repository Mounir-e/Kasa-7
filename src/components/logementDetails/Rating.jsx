import PropTypes from 'prop-types'
import starActive from '../../assets/icons/star-active.svg'
import starInactive from '../../assets/icons/star-inactive.svg'
import '../../styles/components/logementDetails/Rating.css'

function Rating({ rating }) {
  const ratingValue = Number(rating)
  const starNumbers = [1, 2, 3, 4, 5]

  return (
    <div
      className="logementRating"
      aria-label={`Note ${ratingValue} sur ${starNumbers.length}`}
    >
      {starNumbers.map((starNumber) => {
        const isActive = starNumber <= ratingValue
        const starIcon = isActive ? starActive : starInactive

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
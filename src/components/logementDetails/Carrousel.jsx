import { useState } from 'react'
import PropTypes from 'prop-types'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import '../../styles/components/logementDetails/Carrousel.css'

function Carrousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const picturesCount = pictures.length
  const hasMultiplePictures = picturesCount > 1

  const showPreviousImage = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? picturesCount - 1 : previousIndex - 1
    )
  }

  const showNextImage = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === picturesCount - 1 ? 0 : previousIndex + 1
    )
  }

  if (picturesCount === 0) {
    return null
  }

  return (
    <section className="carrousel" aria-label="Photos du logement">
      <img
        src={pictures[currentIndex]}
       alt={`${title} - image ${currentIndex + 1} sur ${picturesCount}`}
        className="carrouselImage"
      />
{hasMultiplePictures && (
  <>
      <button
        type="button"
        className="carrouselButton carrouselButtonLeft"
        onClick={showPreviousImage}
        aria-label="Image précédente"
      >
        <img src={arrowLeft} alt="" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="carrouselButton carrouselButtonRight"
        onClick={showNextImage}
        aria-label="Image suivante"
      >
        <img src={arrowRight} alt="" aria-hidden="true" />
      </button>

      <p className="carrouselCounter">
        {currentIndex + 1}/{picturesCount}
      </p>
      </>
      )}
    </section>
  )
}

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carrousel

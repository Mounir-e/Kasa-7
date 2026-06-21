import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../styles/components/Thumb.css'

function Thumb({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="thumbCard">
      <li>
          <h2 className="thumbCardTitle">{logement.title}</h2>
       <img
          src={logement.cover}
          alt={logement.title}
          className="thumbCardImage"
        />
      </li>
    </Link>
    
  )
}

Thumb.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
}

export default Thumb

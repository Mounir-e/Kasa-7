import PropTypes from 'prop-types'
import '../../styles/components/logementDetails/Title.css'

function Title({ title, location }) {
  return (
    <div className="logementTitle">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default Title

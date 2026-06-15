import PropTypes from 'prop-types'
import '../../styles/components/logementDetails/Host.css'

function Host({ host }) {
  return (
    <div className="logementHost">
      <p>{host.name}</p>
      <img src={host.picture} alt={host.name} />
    </div>
  )
}

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
}

export default Host

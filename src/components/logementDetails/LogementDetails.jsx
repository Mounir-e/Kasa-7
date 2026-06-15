import PropTypes from 'prop-types'
import Collapse from '../Collapse'
import Host from './Host'
import Rating from './Rating'
import Tags from './Tags'
import Title from './Title'
import '../../styles/components/logementDetails/LogementDetails.css'

function LogementDetails({ logement }) {
  return (
    <>
      <div className="logementDetails">
        <div className="logementDetailsInfo">
          <Title title={logement.title} location={logement.location} />
          <Tags tags={logement.tags} />
        </div>

        <div className="logementDetailsHost">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="logementCollapses">
        <Collapse
          id="description"
          label="Description"
          content={logement.description}
        />
        <Collapse
          id="equipments"
          label="Equipements"
          contentList={logement.equipments}
          
        />
      </div>
    </>
  )
}

LogementDetails.propTypes = {
  logement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default LogementDetails

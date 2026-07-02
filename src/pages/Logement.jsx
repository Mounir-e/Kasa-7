import { useParams } from 'react-router-dom'
import Carrousel from '../components/logementDetails/Carrousel'
import logements from '../datas/logements.json'
import Error from './Error'
import Collapse from '../components/Collapse'
import Host from '../components/logementDetails/Host'
import Rating from '../components/logementDetails/Rating'
import Tags from '../components/logementDetails/Tags'
import Title from '../components/logementDetails/Title'
import '../styles/pages/Logement.css'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((logementItem) => logementItem.id === id)

  if (!logement) {
    return <Error />
  }

const {
    title,
    location,
    host,
    tags,
    rating,
    description,
    equipments,
    pictures,
  } = logement
  return (
    <main className="logementPage">
      <Carrousel 
      key={id}
      pictures={pictures} 
      title={title} />
      <>
            <div className="logementDetails">
              <div className="logementDetailsInfo">
                <Title title={title} 
                location={location} />
                <Tags tags={tags} />
              </div>
      
              <div className="logementDetailsHost">
                <Host host={host} />
                <Rating rating={rating} />
              </div>
            </div>
      
            <div className="logementCollapses">
              <Collapse
                id="description"
                label="Description"
                content={description}
                variant="logement"
              />
              <Collapse
                id="equipments"
                label="Equipements"
                contentList={equipments}
                variant="logement"
              />
            </div>
          </>
    </main>
  )
}

export default Logement

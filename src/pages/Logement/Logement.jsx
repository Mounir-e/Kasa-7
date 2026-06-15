import { useParams } from 'react-router-dom'
import Carrousel from '../../components/logementDetails/Carrousel'
import LogementDetails from '../../components/logementDetails/LogementDetails'
import logements from '../../datas/logements.json'
import Error from '../Error/Error'
import '../../styles/pages/Logement.css'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((logementItem) => logementItem.id === id)

  if (!logement) {
    return <Error />
  }

  return (
    <main className="logementPage">
      <Carrousel pictures={logement.pictures} />
      <LogementDetails logement={logement} />
    </main>
  )
}

export default Logement

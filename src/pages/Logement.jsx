import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Carrousel from '../components/logementDetails/Carrousel'
import LogementDetails from '../components/logementDetails/LogementDetails'
import logements from '../datas/logements.json'
import Error from './Error'
import '../styles/pages/Logement.css'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((logementItem) => logementItem.id === id)

  if (!logement) {
    return <Error />
  }

  return (
    <main className="logementPage">
      <Carrousel 
      key={logement.id}
      pictures={logement.pictures} 
      title={logement.title} />
      <LogementDetails 
      logement={logement} />
    </main>
  )
}

Logement.PropTypes = {
title: PropTypes.string.isRequired
}

export default Logement

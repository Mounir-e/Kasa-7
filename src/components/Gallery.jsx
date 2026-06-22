import logementsData from '../datas/logements.json'
import '../styles/components/Gallery.css'
import Thumb from './Thumb'

function Gallery() {
  return (
    <ul className="gallery">
      {logementsData.map((logement) => (
        <Thumb key={logement.id} logement={logement} />
      ))}
    </ul>
  )
}

export default Gallery

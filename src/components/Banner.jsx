import { Link } from 'react-router-dom'
import '../styles/Header.css'
import banner from '../assets/images/banner.jpg'

function Banner () {
    return (
<div className="banner">
    <Link to={'/'}>
            <img src={banner} alt="Bannière Kasa" />
            </Link>
            <div>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            </div>
    )
}
export default Banner
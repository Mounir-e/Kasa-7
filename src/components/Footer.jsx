import '../styles/components/Footer.css'
import kasalogofooter from '../assets/logos/logo.svg'

function Footer () {
    return (
<footer className="footer">
    <img src={kasalogofooter} alt="Logo Kasa footer"/>
    <p>© 2020 Kasa. All rights reserved</p>
</footer>
);
}
export default Footer

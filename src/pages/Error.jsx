import { Link } from "react-router-dom"
import "../styles/pages/Error.css"

function Error() {
  return (
    <div className="error">
      <h1 className="errorTitle">404</h1>
      <h2 className="errorSubtitle">Oups! La page que vous demandez n’existe pas.</h2>
      <Link className="errorLink" to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error

import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.content}>
      <div className={styles.navbar}>
        <Link to="/">Accueil</Link>
        <Link to="/recipe">Recettes</Link>
      </div>
    </div>
  )
}

export default Navbar

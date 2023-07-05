import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.content}>
      <div className={styles.navbar}>
        <Link to="/">Acceuil</Link>
        <Link to="/recipe">recettes</Link>
      </div>
    </div>
  )
}

export default Navbar

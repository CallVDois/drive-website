import logo from '../../assets/logo.png';

import styles from './styles.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div >
          <div className={styles.banner}>
            <div>
              <img className={styles.logo} src={logo} alt="Logo" />
            </div>
            <div>
              <h1>Drive</h1>
            </div>
          </div>
        </div>
      </header >
    </>
  )
}

export default Header
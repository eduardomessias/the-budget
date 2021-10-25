import styles from './layout.module.css'

const Layout = ({children}) =>
    <main className={styles.layout}>
        {children}
    </main>

export default Layout
    
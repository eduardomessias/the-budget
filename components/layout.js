import styles from './layout.module.css'


export default function Layout({ children }) {
    return (
        <main className={styles.draft}>
            {children}
        </main>
    )
}

import styles from './layout.module.css'


export default function ({children}) {
    return (
        <main className={styles.layout}>
            {children}
        </main>
    )
}
    
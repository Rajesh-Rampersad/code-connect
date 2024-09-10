import Image from 'next/image'
import styles from './aside.module.css'
import  Logo from './Logo.png'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            {/* <img src="/Logo.png" alt="Logo da Code Connect" /> */}
            <Image src={Logo} alt="Logo da Code Connect"/>
        </aside>
    )
}
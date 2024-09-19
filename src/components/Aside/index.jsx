import Image from 'next/image'
import styles from './aside.module.css'
import  Logo from './Logo.png'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
          
            <Image src={Logo} alt="Logo da Code Connect"/>
        </aside>
    )
}
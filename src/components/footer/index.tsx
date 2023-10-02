import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <h2>Навигация</h2>
        <nav className={styles.list}>
          <Link href="/">Акции</Link>
          <Link href="/">О нас</Link>
          <Link href="/">Доставка</Link>
          <Link href="/">Контакты</Link>
          <Link href="/">Правовая информация</Link>
        </nav>
      </div>
      <div className={styles.info}>
        <div>
          <h2>Заказывайте по телефону</h2>
          <p>+7 (999) 999-99-99</p>
        </div>
        <div>
          <h2>Доставка работает</h2>
          <p>с 10:30 до 23:30</p>
        </div>
        <img src="/icons/vk.png" alt="ВК" />
      </div>
      <div className={styles.apps}>
        <img src="/icons/logo.svg" alt="Джонни Тунец" className={styles.logo} />
        <div className={styles.download}>
          <p>Любимые блюда в приложении!</p>
          <p>Скачай сейчас!</p>
        </div>
        <div>
          <a href=""><img src="/icons/google.png" alt="google play" /></a>
          <a href=""><img src="/icons/apple.png" alt="app store" /></a>
        </div>
      </div>
    </footer>
  )
}
import Image from "next/image";
import styles from './card.module.css'
import Link from "next/link";


export default function Card(props: Card) {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={props.image} alt={props.title} width={190} height={240} />
      <div className={styles.controls}>
        <div className={styles.info}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.desc}>{props.description}</p>
        </div>
        <Link className={styles.button} href={`/promo/${props.id}`}>Посмотреть</Link>
      </div>
    </div>
  )
}
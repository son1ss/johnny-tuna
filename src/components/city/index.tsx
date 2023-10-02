import { useActions } from "@/hooks/use-actions"
import styles from './city.module.css'

type Props = {
  children: string
}

export default function City({children}: Props) {
  const { changeCity } = useActions()

  return (
    <button type="button" 
      className={styles.city} 
      onClick={() => changeCity(children)}
    >
      {children}
    </button>
  )
}
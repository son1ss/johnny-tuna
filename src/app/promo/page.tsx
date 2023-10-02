'use client'

import Card from "@/components/card"
import { useTypedSelector } from "@/hooks/use-typed-selector"
import { usePathname, useSearchParams } from "next/navigation"
import styles from './promo.module.css'
import { Pagination } from "antd"
import { useRouter } from "next/navigation"

export default function Promo() {
  const cards = useTypedSelector(state => state.promo)
  const searchParams = useSearchParams()
  const router = useRouter()
  const path = usePathname()

  const page = Number(searchParams.get('page')) || 1;

  const changePage = (number: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', String(number))
    router.push(path+'?'+params.toString())
  }
  

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Акции</h1>
      <div className={styles.cards}>
        {cards.slice((page-1)*6, page*6).map(card => <Card {...card} key={card.id} />)}
      </div>
      <Pagination 
        defaultCurrent={1} 
        pageSize={6}
        total={cards.length} 
        onChange={changePage}
      />
    </section>
  )
}
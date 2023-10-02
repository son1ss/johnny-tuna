import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import { ReactNode } from "react"
import styles from './category.module.css'

type Props = {
  children: ReactNode;
  href: Url;
}

export default function Category({children, href}: Props) {
  return (
    <Link href={href} className={styles.category}>{children}</Link>
  )
}
import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import { ReactNode } from "react"
import styles from './navigation-link.module.css'

type Props = {
  children: ReactNode;
  href: Url;
  active?: boolean
}

export default function NavigationLink({children, href, active = false}: Props) {
  return (
    <Link href={href} className={[styles.link, active && styles.active].join(' ')}>
      {children}
    </Link>
  )
}
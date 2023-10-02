import { DownOutlined, EnvironmentOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge, Divider, Dropdown, MenuProps } from "antd";
import styles from './header.module.css'
import NavigationLink from "@/components/navigation-link";
import Category from "@/components/category";
import { categories } from "@/services/categories";
import Link from "next/link";
import { useTypedSelector } from "@/hooks/use-typed-selector";
import City from "@/components/city";

const items: MenuProps['items'] = [
  {
    type: "group",
    label: (
      <City>Магадан</City>
    )
  },
  {
    type: "group",
    label: (
      <City>Москва</City>
    )
  },
  {
    type: "group",
    label: (
      <City>Краснодар</City>
    )
  },
];

const indicator = {
  padding: "0 7px", 
  fontFamily: 'inherit', 
  backgroundColor: '#FF7255'
}

export default function Header() {
  const { count, price } = useTypedSelector(state => state.cart)
  const { city, points } = useTypedSelector(state => state.userInfo)

  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <div className={styles.company}>
          <img src="/icons/logo.svg" alt="Джонни Тунец" className={styles.logo} />
          <Divider type="vertical" className={styles.divider} />
          <nav className={styles.nav}>
            <Dropdown className={styles.location} menu={{ items: items }} >
              <div>
                <EnvironmentOutlined/>
                {city}
                <DownOutlined style={{color: '#35ADE1'}} />
              </div>
            </Dropdown>
            <NavigationLink href="/">Акции</NavigationLink>
            <NavigationLink href="/">О нас</NavigationLink>
            <NavigationLink href="/">Доставка</NavigationLink>
            <NavigationLink href="/">Контакты</NavigationLink>
          </nav>
        </div>
        <div className={styles.contacts}>
          <a href="tel:89990009999">8 (999) 000-99-99</a>
          <p>Прием заказов с 9:00 до 23:00</p>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.categories}>
          {categories.map(item => <Category key={item.name} href={item.url}>{item.name}</Category>)}
          <Link href='/'><img src="/icons/search.svg" alt="поиск" /></Link>
        </div>
        <Divider type="vertical" className={styles.divider} />
        <div className={styles.buttons}>
          <Link className={styles.button} href="/">
            <Badge count={count} size="small"  styles={{indicator}} >
              <img src="/icons/shop.svg" alt="корзина" className={styles.icon} />
            </Badge>
            {price} &#8381;
          </Link>
          <Link className={styles.button} href='/'>
            <img src="/icons/user.svg" alt="user" className={styles.icon} />
            <p>{points} <img src="/icons/points.svg" alt="очки" /></p>
          </Link>
        </div>
      </div>
    </header>
  )
}
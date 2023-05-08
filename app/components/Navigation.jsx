import Link from "next/link";
import styles from "./Navigation.module.css"

const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
];

export function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, url }) => (
            <li key={url}>
              <Link href={url}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

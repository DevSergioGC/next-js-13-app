import Link from "next/link";

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
    <header>
      <nav>
        <ul>
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

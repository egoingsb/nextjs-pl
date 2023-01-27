import Link from "next/link";

export function Header({ title }) {
  return <header>
    <h1>
      <Link href="/">{title}</Link>
    </h1>
  </header>;
}

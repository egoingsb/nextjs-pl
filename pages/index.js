import Link from "next/link";
function Header(){
  return <header>
    <h1>
      <Link href="/">Payletter</Link>
    </h1>
  </header>
}
function Nav(){
  return <nav>
    <ul>
      <li>
        <Link href="/read/1">About</Link>
      </li>
      <li>
        <Link href="/read/2">History</Link>
      </li>
    </ul>
  </nav>
}
function Article(){
  return <article>
    <h2>Welcome</h2>
    Hello.
  </article>
}
export default function Home() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </>
  )
}

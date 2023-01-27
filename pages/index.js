import Link from "next/link";
function Header({title}){
  return <header>
    <h1>
      <Link href="/">{title}</Link>
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
function Article({title, children}){
  return <article>
    <h2>{title}</h2>
    {children}
  </article>
}
function Welcome(){
  return <Article title="Welcome">Hello.</Article>
}
export default function Home() {
  return (
    <>
      <Header title="Payletter"></Header>
      <Nav></Nav>
      <Welcome></Welcome>
    </>
  )
}

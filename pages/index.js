import Link from "next/link";
function Header({title}){
  return <header>
    <h1>
      <Link href="/">{title}</Link>
    </h1>
  </header>
}
function Nav(){
  const topics = [
    {id:1, title:"About", body:"About Payletter"},
    {id:2, title:"History", body:"History of Payletter"},
  ];
  const lis = topics.map((e)=><li key={e.id}>
    <Link href={`/read/${e.id}`}>{e.title}</Link>
  </li>);
  return <nav>
    <ul>
      {lis}
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

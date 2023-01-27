import { Header } from "./Header";
import { Nav } from "./Nav";
import Link from 'next/link';

export default function Layout({children}){
  return <>
    <Header title="Payletter"></Header>
    <Nav></Nav>
    {children}
    <Link href="/create">Create</Link>
  </>
}
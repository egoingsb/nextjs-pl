import { Header } from "./Header";
import { Nav } from "./Nav";
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Layout({children}){
  const router = useRouter();
  let contextUI = null;
  if(router.query.id){
    contextUI = <>
      <Link href={`/update/${router.query.id}`}>Update</Link>
    </>
  }
  return <>
    <Header title="Payletter"></Header>
    <Nav></Nav>
    {children}
    <Link href="/create">Create</Link>
    {contextUI}
  </>
}
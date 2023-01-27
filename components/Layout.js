import { Header } from "./Header";
import { Nav } from "./Nav";

export default function Layout({children}){
  return <>
    <Header title="Payletter"></Header>
    <Nav></Nav>
    {children}
  </>
}
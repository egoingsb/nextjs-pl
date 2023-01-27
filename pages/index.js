import {Layout} from "@/components/Layout";
import { Article } from "../components/Article";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
function Welcome(){
  return <Article title="Welcome">Hello.</Article>
}
export default function Home() {
  return (
    <>
      <Welcome></Welcome>
    </>
  )
}

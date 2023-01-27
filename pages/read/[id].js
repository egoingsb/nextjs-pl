import { useRouter } from "next/router"
import axios from 'axios';
import { Article } from "@/components/Article";
export async function getServerSideProps(context){
  const result = await axios.get('http://localhost:9999/topics/'+context.params.id);
  return {props:{topic:result.data}}
}
export default function Read({topic}){
  const route = useRouter();
  return <Article title={topic.title}>{topic.body}</Article>
}
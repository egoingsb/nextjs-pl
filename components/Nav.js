import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [topics, setTopics] = useState([]);
  async function init(){
    const resp = await fetch('http://localhost:9999/topics');
    const result = await resp.json();
    setTopics(result);
  }
  useEffect(()=>{
    init();
  },[]);
  const lis = topics.map((e) => <li key={e.id}>
    <Link href={`/read/${e.id}`}>{e.title}</Link>
  </li>);
  return <nav>
    <ul>
      {lis}
    </ul>
  </nav>;
}

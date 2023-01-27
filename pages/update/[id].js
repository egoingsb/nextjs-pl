import {Article} from "@/components/Article";
import {useState} from "react";
import axios from 'axios';
import {useRouter} from "next/router";
export async function getServerSideProps(context){
  const result = await axios.get('http://localhost:9999/topics/'+context.params.id);
  return {props:{topic:result.data}}
}
export default function Update({topic}) {
  const route = useRouter();
  const [title, setTitle] = useState(topic.title);
  const [body, setBody] = useState(topic.body);
  return <Article title="Update">
    <form onSubmit={async (evt)=>{
      evt.preventDefault();
      const title = evt.target.title.value;
      const body = evt.target.body.value;
      const result = await axios.patch('http://localhost:9999/topics/'+route.query.id, {title, body});
      route.push(`/read/${result.data.id}`);
    }}>
      <p>
        <input type="text" name="title" placeholder="제목" value={title} onChange={evt=>{
          setTitle(evt.target.value);
        }}/>
      </p>
      <p>
        <textarea name="body" placeholder="본문" value={body} onChange={evt=>{
          setBody(evt.target.value);
        }}></textarea>
      </p>
      <p>
        <input type="submit" value="Create" />
      </p>
    </form>
  </Article>
}
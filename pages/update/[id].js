import {Article} from "@/components/Article";
import axios from 'axios';
export async function getServerSideProps(context){
  const result = await axios.get('http://localhost:9999/topics/'+context.params.id);
  return {props:{topic:result.data}}
}
export default function Update({topic}) {
  return <Article title="Update">
    <form onSubmit={async (evt)=>{
      evt.preventDefault();
      const title = evt.target.title.value;
      const body = evt.target.body.value;
      const result = await axios.post('http://localhost:9999/topics', {title, body});
      route.push(`/read/${result.data.id}`);
    }}>
      <p>
        <input type="text" name="title" placeholder="제목" value={topic.title}/>
      </p>
      <p>
        <textarea name="body" placeholder="본문" value={topic.body}></textarea>
      </p>
      <p>
        <input type="submit" value="Create" />
      </p>
    </form>
  </Article>
}
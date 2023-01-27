import {Article} from "@/components/Article";
export default function Update({ article }) {
  return <Article title="Update">
    <form onSubmit={async (evt)=>{
      evt.preventDefault();
      const title = evt.target.title.value;
      const body = evt.target.body.value;
      const result = await axios.post('http://localhost:9999/topics', {title, body});
      route.push(`/read/${result.data.id}`);
    }}>
      <p>
        <input type="text" name="title" placeholder="제목" />
      </p>
      <p>
        <textarea name="body" placeholder="본문"></textarea>
      </p>
      <p>
        <input type="submit" value="Create" />
      </p>
    </form>
  </Article>
}
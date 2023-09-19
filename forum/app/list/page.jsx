import { connetDB } from "@/util/database";
import ListItem from "./ListItem";

export default async function List() {
  const client = await connetDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  // server component 에서 client component 로 전달하는 props 를 일반 객체(plain object) 로 보내기 위함
  // result = result.map(item => ({...item, _id: item._id.toString()}));

  return (
    <div className="list-bg">
      <ListItem result={result}/>
    </div>
  )
}
import { connetDB } from "@/util/database"

export default async function Home() {

  const client = await connetDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  // console.log(result);

  return (
    <div>안녕</div>
  )
}

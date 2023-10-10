import { connectDB } from "@/util/database"

// 페이지 단위 캐싱하기
export const revalidate = 60; 
/* 
페이지 방문 시 60초 동안 페이지가 캐싱됨 
60초가 지나면 NextJS 백그라운드에서 해당 페이지의 업데이트가 이루어짐
이 업데이트가 완료되면 새롭게 만들어진 페이지를 사용자에게 제공해주는 방식
*/

export default async function Home() {

  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  // console.log(result);

  return (
    <div>안녕</div>
  )
}

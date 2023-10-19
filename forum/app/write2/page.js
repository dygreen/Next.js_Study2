// Server actions : server component 안에서 서버 기능 만들어서 한 번에 처리하는 기능 (13.4 버전 이상)

import { connectDB } from "@/util/database";
import { revalidatePath } from "next/cache";

//1. 페이지만들었음
export default async function Write2() {
  //DB에서 데이터 뽑아서 보여주기 
  const db = (await connectDB).db('forum')
  let result = await db.collection('post_test').find().toArray()

  //3. 서버기능만들었음
  async function handleSubmit(formData) {
    'use server'; // 함수 안에 작성하면, 그 함수 내용을 자동으로 서버 API 로 만들어줌
    const db = (await connectDB).db('forum')
    await db.collection('post_test').insertOne({title : formData.get('title')})
    revalidatePath('/write2') // 페이지 다시 로드 (차이점만 바꿔주는 새로고침)
  }
 
  //2.폼만들었음
  return (
    <form action={handleSubmit}> 
      <input type="text" name="title" />
      <button type="submit">Submit</button>
      {
        result ? result.map((a)=>
          <p>글제목 : {a.title}</p>
        )
        : null
      }
    </form>
  );
} 

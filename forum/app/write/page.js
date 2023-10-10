import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
  let session = await getServerSession(authOptions);

  return session ? (
    <div className="p-20">
      <h4>글 작성</h4>
      <form action="/api/post/new" method="POST">
        <input type="text" name="title" placeholder="글 제목"/>
        <input type="text" name="content" placeholder="글 내용"/>
        <button type="submit">전송</button>
      </form>
      
      {/* <form action="/api/date" method="GET">
        <button type="submit">날짜 출력</button>
      </form> */}
    </div>
  ) : (
    <h4>로그인이 필요한 서비스입니다.</h4>
  )
}
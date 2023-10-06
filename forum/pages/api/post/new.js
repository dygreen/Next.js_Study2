import { connetDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  // 서버에서 현재 로그인 중인 유저 정보 출력
  let session = await getServerSession(req, res, authOptions);

  // 현재 로그인 중인 유저가 있으면 글 발행 시 유저 정보(이메일)도 함께 저장
  if (session) {
    req.body.author = session.user.email
  }

  if (req.method == 'POST') {
    // 제목 / 내용 빈칸일 경우 에러
    if (req.body.title == '' || req.body.content == '') {
      return res.status(500).json('내용을 작성해주세요.')
    }
    
    // DB 에러 예외 처리
    try {
      const client = await connetDB;
      const db = client.db('forum');
      let result = await db.collection('post').insertOne(req.body);
      
      // 성공 시 /list 로 이동
      return res.redirect(302, '/list');
    } catch (error) {
      console.log(error);
    }
  }
}
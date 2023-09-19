import { connetDB } from "@/util/database";

export default async function handler(req, res) {
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
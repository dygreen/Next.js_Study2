// mongodb 연결
import { MongoClient } from "mongodb"
  
const url = 'mongodb+srv://ehdus9877:qwer1234@cluster0.q1vogew.mongodb.net/?retryWrites=true&w=majority';
const options = { useNewUrlParser: true };
let connetDB;

// Next.js 의 경우 개발환경에서는 파일 저장할 때마다 자바스크립트 파일들이 재실행되기 때문에 MongoClient.connect 가 동시에 여러개 실행될 수 있음 -> db 입출력 느려짐 -> 이를 방지하기 위해 global 이라는 전역변수에 보관하여 중복 실행을 막는다.
if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connetDB = global._mongo;
} else {
  connetDB = new MongoClient(url, options).connect();
}

export {connetDB};
/* middleware
: 요청과 응답 사이에 간섭하는 코드

서버 기능
- DB 조회해보기 
- 로그인 안한 사람이 /어쩌구 하위 경로로 GET, POST요청 하는걸 막기
- 이상한 페이지 접속하면 다른 곳으로 이동시키기 
- 쿠키만들어주기 

-> 하나의 서버 기능을 여러 서버 API 에 동시에 적용하고 싶은 경우 middleware 사용
*/

import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'

export async function middleware(request) {
  /* 
  console.log(request.nextUrl)  //유저가 요청중인 URL 출력해줌
  console.log(request.cookies)  //유저가 보낸 쿠키 출력해줌
  console.log(request.headers)  //유저의 headers 정보 출력해줌 
  NextResponse.next()  //통과
  NextResponse.redirect()  //다른페이지 이동
  NextResponse.rewrite()  //(브라우저 주소창에 뜨는 URL을 변경하지 않고) 다른페이지 이동
  */

  // 로그인 안된 유저는 /write 페이지 접속 시 다른 페이지로 보내기 (* JWT 써야 유저 정보 쉽게 출력 가능)
  if (request.nextUrl.pathname.startsWith('/write')) {
    // 현재 로그인한 유저 정보 출력
    const session = await getToken({req: request});

    if (session == null) {
      return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }
  }

  // 유저가 /list 페이지 접속 시 로그 남기기
  if (request.nextUrl.pathname.startsWith('/list')) {
    console.log(new Date().toLocaleString());
    console.log(request.headers.get('sec-ch-ua-platform'));

    return NextResponse.next()
  }


  /* cookie 다루기 
  request.cookies.get('쿠키이름')  //출력
  request.cookies.has('쿠키이름')  //존재확인
  request.cookies.delete('쿠키이름')  //삭제
  
  const response = NextResponse.next()
  response.cookies.set({
    name: 'mode',
    value: 'dark',
    maxAge: 3600,
    httpOnly : true -> 유저가 자바스크립트로 조작하지 못하게 막기
  })  

  return response  //쿠키생성
  */

  // 유저가 /register 방문 시 쿠키 생성
  if (request.nextUrl.pathname.startsWith('/register')) {
    if (!request.cookies.has('visited')) {
      const response = NextResponse.next();

      response.cookies.set({
        name: 'visited',
        value: 'true',
        maxAge: 3600
      })
    
      return response
    }
    return NextResponse.next()
  }
} 
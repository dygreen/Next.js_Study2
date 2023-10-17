/* 루트 경로에 있는 layout.js 에서 에러날 때 보여줄 error.js
- 안에 들어가는 내용은 error.js 와 동일
*/

'use client'

export default function Error({error, reset}){
  return (
    <div>
      <h4>에러남</h4>
      <button onClick={()=>{ reset() }}>다시시도</button>
    </div>
  )
}


/* Next.js 에서 페이지를 만들어 줄 때
같은 폴더 안에 layout.js / error.js / loading.js / page.js 컴포넌트들이 있으면
layout.js 안에 error.js 안에 loading.js 안에 page.js (또는 하위폴더 layout.js) 컴포넌트를 차례로 감싸는 식으로 보여줍니다.

<Layout>
  <Error fallback={자식들 내용이 에러시 보여줄 error.js 내용}>
    <Loading fallback={자식들 내용이 로딩시 보여줄 loading.js 내용}>
      page.js 내용~~
    </Loading>
  </Error>
</Layout>
*/
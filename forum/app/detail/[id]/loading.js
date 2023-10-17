/* 로딩중 UI
- client component 사용 가능
- 리액트의 <Suspense fallback={<h4>로딩중</h4>} 과 똑같은 역할 -> Next.js 에선 loading.js 에 적으면 자동으로 <Suspense> 로 바꿔줌
*/

export default function Loading() {
  return (
    <h4>로딩중</h4>
  )
}
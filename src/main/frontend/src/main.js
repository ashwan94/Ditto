import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <p>메인 페이지입니다zz</p>
      <Link to="/podcast/list">팟캐스트 리스트</Link>
    </>
  );
}

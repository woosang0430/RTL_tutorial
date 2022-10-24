import React from "react";

function MyPage({ user }) {
  return (
    <div>
      {user?.name ? (
        <h1>{user.name}님 환영합니다.</h1>
      ) : (
        <h1>
          로그인 하세요. <button>로그인</button>
        </h1>
      )}
      <h2>test</h2>
      <input data-testid="test_123" />
    </div>
  );
}

export default MyPage;

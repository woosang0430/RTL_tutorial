import { render, screen } from "@testing-library/react";
import MyPage from "./MyPage";

it("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage />);

  // 정규표현식 대신 문자열을 사용하는 경우 Text의 모든 문자열을 넣어야한다. 일부만 넣을 시 에러 발생
  const txtEl = screen.getByText(/로그인 하세요./i);

  const headingEls = screen.getByRole("heading", {
    level: 2,
  });

  expect(headingEls).toBeInTheDocument();

  // 최후의 수단으로 사용
  const inputEl = screen.getByTestId("test_123");
  expect(inputEl).toBeInTheDocument();

  const btnEl = screen.getByRole("button");
  /**
   * HTML의 요소의 default role을 가지고 찾는 것
   * h1 ~ h6 : heading
   * button : button
   * a : link
   * checkbox : checkbox
   * radio : radio
   * select : combobox
   * ...
   */

  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});

it("유저가 있으면 환영문구를 보여준다.", () => {
  const user = { name: "woosang" };
  render(<MyPage user={user} />);

  const txtEl = screen.getByText(/woosang님 환영합니다./i);

  expect(txtEl).toBeInTheDocument();
});

it("유저가 name이 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage user={"woosang"} />);

  const txtEl = screen.getByText(/로그인 하세요./i);
  const btnEl = screen.getByRole("button");

  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});

// custom matcher 확인
// https://github.com/testing-library/jest-dom

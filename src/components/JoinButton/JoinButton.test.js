import { render, screen } from "@testing-library/react";
import JoinButton from "./JoinButton";

it("19세 이하면 버튼을 클릭할 수 없다. 안내문구는 빨간색", () => {
  render(<JoinButton age={15} />);

  const txtEl = screen.getByRole("heading");
  const btnEl = screen.getByRole("button");

  expect(txtEl).toBeInTheDocument();
  expect(txtEl).toHaveStyle({ color: "red" });

  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("가입");
  expect(btnEl).toBeDisabled();
});

it("성인이면 버튼을 클릭할 수 있습니다.. 안내문구는 흰색", () => {
  render(<JoinButton age={20} />);

  const txtEl = screen.getByRole("heading");
  const btnEl = screen.getByRole("button");

  expect(txtEl).toBeInTheDocument();
  expect(txtEl).toHaveStyle({ color: "white" });

  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("가입");
  expect(btnEl).toBeEnabled();
});

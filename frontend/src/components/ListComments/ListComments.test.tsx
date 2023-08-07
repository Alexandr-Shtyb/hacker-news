import { render, screen } from "@testing-library/react";
import {Provider} from "react-redux";
import {setupStore} from "../../store/store";
import { ListComments } from "./ListComments";

describe("ListComments component", () => {
  it("should render null when kids prop is an empty array", () => {
    render(<ListComments kids={[]} />);
    expect(document.querySelector('.listComments')?.firstChild).toBeNull();
  });

  it("should render a Comment component for each kid", () => {
    const store = setupStore();
    const kids = [1, 2, 3];
    const {getAllByTestId} = render(
      <Provider store={store}>
        <ListComments kids={kids} />
      </Provider>
    );
    const comments = getAllByTestId("comment");
    expect(comments.length).toEqual(kids.length);
  });
});

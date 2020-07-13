import { shallow } from "enzyme";
import React from "react";
import MovieList from "./MovieList";

describe("MovieList component", () => {
  let wrapper, mockProps;
  // beforeEach it makes sure that it run before each one of the test
  beforeEach(() => {
    mockProps = {
      movies: [],
      searchField: "",
    };
    wrapper = shallow(<MovieList {...mockProps} />);
  });
  it("should render the MovieList Component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should return error if the searchField length is zero ", () => {
    expect(wrapper).toEqual({});
  });

  it("should return movies if the searchField length is greater than zero & movies exist", () => {
    const mockProps1 = {
      searchField: "Hello",
      movies: [
        {
          imdbID: "123",
          Title: "Hello",
          Poster: "how are you",
          Year: "2020",
        },
      ],
    };
    const wrapper1 = shallow(<MovieList {...mockProps1} />);
    expect(wrapper1.props().children.length).toEqual(1);
  });
});

import React from "react";
import { shallow } from "enzyme";
import MovieCard from "./MovieCard";

it("should render the MovieCard component", () => {
  const mockTitle = "hello";
  let wrapper = shallow(<MovieCard Title={mockTitle} />);
  expect(wrapper).toMatchSnapshot();
});

it("should render the MovieCard component with props", () => {
  const mockTitle = "hello";
  let wrapper = shallow(<MovieCard Title={mockTitle} />);
  expect(wrapper.contains(mockTitle)).toEqual(true);
});

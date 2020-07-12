import { shallow } from "enzyme";
import React from "react";
import SearchBox from "./SearchBox";

// import { Provider } from "react-redux";

// // import store from "../../Redux/store";
// import configureStore from "redux-mock-store";

// const mockStore = configureStore();

describe("SearchBox component", () => {
  let wrapper, mockProps;
  // beforeEach makes sure that its run before each one of the test
  beforeEach(() => {
    mockProps = {
      searchField: "",
      error: "",
      clearSearchField: jest.fn(),
      clearMovies: jest.fn(),
      handleSubmit: jest.fn(),
      searchChange: jest.fn(),
    };
    wrapper = shallow(<SearchBox {...mockProps} />);
  });

  it("should render the SearchBox Component ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle the mock method with the button click ", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.length).toEqual(1);
  });
  it("should handle the mock method with the span if searchField greater than zero ", () => {
    const mockItems = {
      searchField: "hello",
      clearSearchField: jest.fn(),
      clearMovies: jest.fn(),
    };

    const wrapper1 = shallow(<SearchBox {...mockItems} />);
    wrapper1.find("span").simulate("click");
    expect(wrapper1.length).toEqual(1);
  });
});

// describe("searchBox", () => {
//   let wrapper, store;
//   beforeEach(() => {
//     const initialState = {
//       searchText: { searchField: "" },
//       moviesList: { error: "" },
//     };

//     store = mockStore(initialState);
//     wrapper = shallow(<SearchBox store={store} />).dive();
//   });
//   it("should render the searchBox component", () => {
//     // const initialState = {
//     //   searchText: { searchField: "" },
//     //   moviesList: { error: "" },
//     // };
//     // const store = mockStore(initialState);
//     // const wrapper = mount(
//     //   <Provider store={store}>
//     //     <SearchBox />
//     //   </Provider>
//     // );
//     expect(wrapper).toMatchSnapshot();
//   });

//   it("should  show the initial searchField value", () => {

//     expect(wrapper.props().searchField).toEqual("");

//   });

import { shallow, mount } from "enzyme";
import React from "react";
import SearchBox from "./SearchBox";
import { Provider } from "react-redux";

// import store from "../../Redux/store";
import configureStore from "redux-mock-store";
import { searchChange } from "../../Redux/SearchBox/SearchBox.actions";
const mockStore = configureStore();

describe("searchBox", () => {
  let wrapper, store;
  beforeEach(() => {
    const initialState = {
      searchText: { searchField: "" },
      moviesList: { error: "" },
    };

    store = mockStore(initialState);
    wrapper = shallow(<SearchBox store={store} />).dive();
  });
  it("should render the searchBox component", () => {
    // const initialState = {
    //   searchText: { searchField: "" },
    //   moviesList: { error: "" },
    // };
    // const store = mockStore(initialState);
    // const wrapper = mount(
    //   <Provider store={store}>
    //     <SearchBox />
    //   </Provider>
    // );
    expect(wrapper).toMatchSnapshot();
  });

  it("should  show the initial searchField value", () => {
    // test that the state values were correctly passed as props
    expect(wrapper.props().searchField).toEqual("");
    // const dispatch = jest.fn();
    // store.dispatch = dispatch;
  });

  it("should change the initial searchField value when ever the user types", () => {
    const dispatch = jest.fn();
    store.dispatch = dispatch;
    console.log(dispatch);

    expect(dispatch).toEqual("hai");
  });
});

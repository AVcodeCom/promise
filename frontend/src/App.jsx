import React, { Component, Fragment } from "react";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Authorisation from "./components/Autorisation/Autorisation";
import { connect } from "react-redux";
import { newTokenFromRefresh } from "./store/token/action";
import { newCategoryList } from "./store/category/action";
import { newList } from "./store/list/action";
import { Container, AuthBox } from "./componentsStyled/App.style";

class App extends Component {
  
  componentDidMount() {
    const {
      isAutorisation,
      newTokenFromRefresh,
      newList,
      newCategoryList,
    } = this.props;
    const remember = localStorage.getItem("remember") === "true";
    const tokenData = localStorage.getItem("tokenData");

    if (remember) {
      newTokenFromRefresh();
      if (Date.now() >= tokenData * 5000) {
        newTokenFromRefresh();
      }
    }
    if (isAutorisation) {
      newCategoryList();
      newList();
    }
  }

  render() {
    const { isAutorisation, newList, entrance } = this.props;

    return (
      <Container>
        <Header isAutorisation={isAutorisation} entrance={entrance} />

        {!isAutorisation ? (
          <AuthBox>
            {entrance ? <Authorisation newList={newList} /> : <Registration />}
          </AuthBox>
        ) : (
          <Fragment>
            <Input />
          </Fragment>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isAutorisation: store.tokenReducer.isAutorisation,
    entrance: store.changeEntranceReduser.entrance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newList: () => dispatch(newList()),
    newTokenFromRefresh: () => dispatch(newTokenFromRefresh()),
    newCategoryList: () => dispatch(newCategoryList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import Form from "./components/Form";
import { useEffect } from "react";
import checkAuth from "./redux/actions/thunk/checkAuth";
import { connect } from "react-redux";
import logout from "./redux/actions/thunk/logout";

function App({ isAuth, checkAuth, userEmail, logout }) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  if (isAuth) {
    return (
      <div className="App">
        <p>{userEmail}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{isAuth ? `TRUE ${userEmail}` : "FALSE"}</p>
        <Form />
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
    userEmail: state.user?.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => {
      dispatch(checkAuth());
    },
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

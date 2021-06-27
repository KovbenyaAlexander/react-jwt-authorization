import Form from "./components/Form";
import { useEffect } from "react";
import checkAuth from "./redux/actions/thunk/checkAuth";
import { connect } from "react-redux";
import logout from "./redux/actions/thunk/logout";
import getUsersData from "./redux/actions/thunk/getUsersData";
import UsersData from "./components/UsersData";

function App({
  isAuth,
  checkAuth,
  userEmail,
  logout,
  isLoading,
  getUsersData,
  isActivated,
}) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isAuth) {
    return (
      <div className="App">
        <span>signed in:</span>
        <span>{isAuth ? "TRUE" : "FALSE"}</span>
        <hr />
        <p>Your Email - {userEmail}</p>
        <p>email confirmed - {isActivated ? "True" : "False"}</p>
        <button onClick={logout}>Logout</button>
        <button onClick={getUsersData}>Get users</button>

        <UsersData />
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <span>signed in:</span>
        <span>{isAuth ? `TRUE ${userEmail}` : "FALSE"}</span>
        <hr />
        <button onClick={getUsersData}>Get users</button>
        <Form />
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    isAuth: state.isAuth,
    userEmail: state.user?.email,
    isActivated: state.user?.isActivated,
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
    getUsersData: () => {
      dispatch(getUsersData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

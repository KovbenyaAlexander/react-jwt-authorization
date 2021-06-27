import { useState } from "react";
import login from "../redux/actions/thunk/login";
import registration from "../redux/actions/thunk/registration";
import { connect } from "react-redux";

const Form = ({ login, registration }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <span>login</span>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
      />
      <br />
      <span>password</span>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
      />
      <br />
      <button onClick={() => login(email, password)}>Login</button>
      <button onClick={() => registration(email, password)}>
        Registration
      </button>

      <br />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    registration: (email, password) => dispatch(registration(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Form);

import { useState } from "react";

const Form = () => {
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
      <button>Login</button>
      <button>Registration</button>
    </div>
  );
};

export default Form;

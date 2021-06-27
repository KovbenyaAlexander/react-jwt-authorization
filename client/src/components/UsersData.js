import React from "react";
import { connect } from "react-redux";
import css from "./UsersData.module.css";

const UsersData = ({ usersData }) => {
  if (!usersData) {
    return null;
  }

  const data = usersData.map((user, i) => {
    return (
      <tr key={i}>
        <td>{user.email}</td>
        <td>{user.isActivated ? "True" : "False"}</td>
      </tr>
    );
  });
  return (
    <table className={`${css.table} striped`}>
      <thead>
        <tr>
          <th>Email</th>
          <th>IsEmailConfirmed</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    usersData: state.usersData,
  };
};

export default connect(mapStateToProps)(UsersData);

/*


import React from "react";
import { connect } from "react-redux";

const UsersData = ({ usersData }) => {
  if (!usersData) {
    return null;
  }

  const data = usersData.map((user, i) => {
    return (
      <p key={i}>
        {user.email} email confirmed-
        {user.isActivated ? "True" : "False"}
      </p>
    );
  });
  return <div>{data}</div>;
};

const mapStateToProps = (state) => {
  return {
    usersData: state.usersData,
  };
};

export default connect(mapStateToProps)(UsersData);


*/

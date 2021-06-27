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

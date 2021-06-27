import React from "react";
import { connect } from "react-redux";

const UsersData = ({ usersData }) => {
  if (!usersData) {
    return null;
  }

  const data = usersData.map((user) => {
    return (
      <p>
        {user.email} isActivated-
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

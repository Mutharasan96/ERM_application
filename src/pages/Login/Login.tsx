import React, { ReactElement } from "react";

type LoginProps = { title?: string };

const Login = ({ title }: LoginProps): ReactElement => {
  return <div>{title}</div>;
};

export default Login;

import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="">
      <h1>{status}</h1>
      <h2>Page is {statusText}!</h2>
    </div>
  );
};

export default Error;

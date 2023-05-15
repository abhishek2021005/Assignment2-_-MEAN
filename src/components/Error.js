import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  const { status, statusText } = err;
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2 style={{ color: "pink" }}>{status + " :" + statusText}</h2>
      <h2 style={{ color: "violet" }}>{err.error.message}</h2>
    </div>
  );
};

export default Error;

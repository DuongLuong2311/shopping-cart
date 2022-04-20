import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Auth = () => {

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    dispatch(authActions.login())
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../store/action";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;

    const getForm = {
      email: form.email,
      password: form.password,
    };
    getForm[name] = value;
    setform(getForm);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      loginUser(form, () => {
        navigate("/home");
      })
    );
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={submitForm}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary form-control">
          Submit
        </button>
      </form>
    </div>
  );
}

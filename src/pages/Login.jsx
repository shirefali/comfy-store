import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold uppercase">Login</h4>
        <FormInput
          label="Email"
          type="text"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="submit" className="btn-primary uppercase" />
        </div>
        <button type="button" className="btn btn-secondary uppercase btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link to="/register" className="link link-hover link-primary">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;

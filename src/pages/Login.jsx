import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local/", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage = console.log(error.response?.data);
      error?.response?.data?.error?.message ||
        "Please Double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

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
          <SubmitBtn text="login" className="btn-primary uppercase" />
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

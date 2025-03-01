import { Form, Link } from "react-router-dom";
import { SubmitBtn, FormInput } from "../components";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please Double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form className="card w-96 shadow-lg p-8 bg-base-100 flex flex-col gap-y-4">
        <h4 className="text-3xl font-bold text-center uppercase">Register</h4>
        <FormInput type="text" name="username" label="Username" />
        <FormInput type="email" name="email" label="Email" />
        <FormInput type="password" label="Password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member ?{" "}
          <Link to="/login" className="link link-hover link-primary ">
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;

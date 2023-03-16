import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../Context/UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LeftImageSection from "../../Components/Layout/LeftImageSection";
import Label from "../../Components/Common/Label";

function Login() {
  const { user, setIsLogin } = useUser();
  const naviagte = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      const userDetials = user || JSON.parse(localStorage.getItem("user"));
      if ((values.email === "demo@email.com", values.password === "demo")) {
        localStorage.setItem("isLogin", JSON.stringify(true));
        setIsLogin(true);
        setTimeout(() => naviagte("/home"), 100);
      } else {
        if (userDetials) {
          if (
            user.email === values.email &&
            user.password === values.password
          ) {
            localStorage.setItem("isLogin", JSON.stringify(true));
            setIsLogin(true);
            setTimeout(() => naviagte("/home"), 100);
          } else if (user.email !== values.email) {
            toast.error("Invalid Email");
          } else if (user.password !== values.password) {
            toast.error("Invalid Password");
          }
        } else {
          toast("No User Found");
        }
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
  });

  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(false));
  }, []);

  return (
    <main className="sm:flex h-screen text-center sm:text-left">
      <LeftImageSection />
      <section className="sm:w-1/2 mx-auto p-5 flex justify-center items-center">
        <div className="w-full">
          <p>email: demo@email.com, pass : demo</p>
          <div className="p-5 sm:p-10 bg-white rounded-lg shadow-md">
            <h1 className="font-bold sm:text-5xl text-3xl">Welcome Back!</h1>
            <div className="my-4">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <Label htmlFor="email" labelText="Email" />
                  <input
                    id="email"
                    type="email"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      formik.errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <Label htmlFor="password" labelText="Password" />
                  <input
                    id="password"
                    type="password"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      formik.errors.password ? "border-red-500" : ""
                    }`}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.password}
                    </p>
                  )}
                </div>
                <div className="sm:flex items-center justify-between mt-8 sm:mt-0">
                  <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Sign In
                  </button>
                  <div
                    className="font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer mt-2 sm:mt-0"
                    onClick={() => naviagte("/signup")}
                  >
                    Register here →
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;

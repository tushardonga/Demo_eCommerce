import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import LeftImageSection from "../../Components/Layout/LeftImageSection";
import Label from "../../Components/Common/Label";

const Signup = () => {
  const { setUser } = useUser();
  const naviagte = useNavigate();
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    onSubmit: (values) => {
      setUser(values);
      localStorage.setItem("user", JSON.stringify(values));
      localStorage.setItem("isLogin", JSON.stringify(true));
      naviagte("/");
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
  });
  return (
    <main className="sm:flex h-screen text-center sm:text-left">
      <LeftImageSection />
      <section className="flex justify-center items-center sm:w-1/2 mx-auto p-5">
        <div className="w-full p-5 sm:p-10 bg-white rounded-lg shadow-md">
          <h1 className="font-bold sm:text-5xl text-3xl">Create an Account</h1>
          <div className="my-4">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="name" labelText="Name" />
                <input
                  id="name"
                  type="text"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formik.errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name && (
                  <p className="text-red-500 text-xs italic">
                    {formik.errors.name}
                  </p>
                )}
              </div>
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
              <div className="mb-4">
                <Label htmlFor="confirmPassword" labelText="Confirm Password" />
                <input
                  id="confirmPassword"
                  type="password"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formik.errors.confirmPassword ? "border-red-500" : ""
                  }`}
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
                {formik.errors.confirmPassword && (
                  <p className="text-red-500 text-xs italic">
                    {formik.errors.confirmPassword}
                  </p>
                )}
              </div>
              <div className="sm:flex items-center justify-between mt-8 sm:mt-0">
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
                <div
                  className="font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer mt-2 sm:mt-0"
                  onClick={() => naviagte("/")}
                >
                  Have an account? Login
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;

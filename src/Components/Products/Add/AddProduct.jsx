import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import BackIcon from "../../../Assets/svg/BackIcon";
import { Products } from "../../../Utils/data";

const AddProduct = () => {
  const naviagte = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      brand: "",
      category: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be greater than zero"),
      description: Yup.string().required("Description is required"),
      brand: Yup.string().required("Brand is required"),
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: (values) => {
      Products.push(values);
      formik.resetForm();
      toast.success("Product Added Successfully");
    },
  });

  return (
    <div className="w-4/5 mx-auto mt-12">
      <div class="flex items-center mb-4">
        <BackIcon />
        <button
          onClick={() => naviagte("/home")}
          class="text-blue-500 font-semibold hover:underline"
        >
          Back to Dashboard
        </button>
      </div>
      <div className="bg-gray-100 p-10">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.title && formik.errors.title
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.title}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.price && formik.errors.price
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("price")}
            />
            {formik.touched.price && formik.errors.price ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.price}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.description && formik.errors.description
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.description}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-gray-700 font-bold mb-2"
            >
              Brand
            </label>
            <input
              id="brand"
              type="text"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.description && formik.errors.description
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("brand")}
            />
            {formik.touched.brand && formik.errors.brand ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.brand}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2"
            >
              category
            </label>
            <input
              id="category"
              type="text"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.category && formik.errors.category
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("category")}
            />
            {formik.touched.category && formik.errors.category ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.category}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

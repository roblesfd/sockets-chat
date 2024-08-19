import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  description: "",
  photo: "",
};

const checkoutSchema = Yup.object().shape({
  name: Yup.string().required("Este campo es obligatorio"),
  description: Yup.string().required("Este campo es obligatorio"),
  photo: Yup.string().required("Este campo es obligatorio"),
});

const FormCreateServer = () => {
  const onSaveUserClicked = (values) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full rounded px-8 py-8 text-primary-950">
        <h2 className="text-2xl font-bold text-center mb-6">
          Crear un servidor
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={(values) => {
            onSaveUserClicked(values);
          }}
        >
          {(formik) => {
            const { handleSubmit } = formik;

            return (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2 text-left"
                    htmlFor="name"
                  >
                    Nombre del servidor
                  </label>
                  <input
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700   leading-tight  ${
                      formik.touched.name &&
                      formik.errors.name &&
                      "outline  outline-red-400"
                    }
                      ${
                        formik.touched.name &&
                        !formik.errors.name &&
                        "outline  outline-green-300"
                      }
                    `}
                    id="name"
                    type="text"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div
                      className={` text-sm mt-2 ${
                        formik.touched.name &&
                        formik.errors.name &&
                        "text-red-500"
                      }`}
                    >
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2 text-left"
                    htmlFor="description"
                  >
                    Descripción
                  </label>
                  <input
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700   leading-tight  ${
                      formik.touched.description &&
                      formik.errors.description &&
                      "outline  outline-red-400"
                    }
                      ${
                        formik.touched.description &&
                        !formik.errors.description &&
                        "outline  outline-green-300"
                      }
                    `}
                    id="description"
                    type="text"
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.touched.description && formik.errors.description ? (
                    <div
                      className={` text-sm mt-2 ${
                        formik.touched.description &&
                        formik.errors.description &&
                        "text-red-500"
                      }`}
                    >
                      {formik.errors.description}
                    </div>
                  ) : null}
                </div>
                {/* Button */}
                {/* <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2 text-left"
                    htmlFor="name"
                  >
                    Nombre del servidor
                  </label>
                  <input
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700   leading-tight  ${
                      formik.touched.name &&
                      formik.errors.name &&
                      "outline  outline-red-400"
                    }
                      ${
                        formik.touched.name &&
                        !formik.errors.name &&
                        "outline  outline-green-300"
                      }
                    `}
                    id="name"
                    type="text"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div
                      className={` text-sm mt-2 ${
                        formik.touched.name &&
                        formik.errors.name &&
                        "text-red-500"
                      }`}
                    >
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div> */}
                <div className="w-full flex items-center justify-between mt-8">
                  <button
                    type="submit"
                    className="w-full bg-primary-400 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Crear +
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default FormCreateServer;

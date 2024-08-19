import { Field, Formik } from "formik";
import * as Yup from "yup";
// import { useGetAUserQuery, useUpdateUserMutation } from "./usersApiSlice";
import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";

let initialValues = {
  name: "",
  description: "",
  category: "",
  photo: "",
};

const checkoutSchema = Yup.object().shape({
  name: Yup.string().required("Este campo es obligatorio"),
  description: Yup.string().required("Este campo es obligatorio"),
  category: Yup.string().required("Este campo es obligatorio"),
  photo: Yup.string().required("Este campo es obligatorio"),
});

const ServerConfigurationInfo = () => {
  const { id } = useParams();

  const onSaveUserClicked = async (values) => {
    // const result = await udpateUser({ ...values });
    // if (result.error) {
    //   toast.error(result.error.data.message);
    // } else {
    //   toast.success(result.data.message);
    // }
  };

  // const [udpateUser] = useUpdateUserMutation();

  // const {
  //   data: user,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetAUserQuery(id);

  let content;

  // if (isLoading) content = <p>Cargando...</p>;

  // if (isError) content = <p>{error?.data?.message}</p>;

  // if (isSuccess) {
  // initialValues = { ...initialValues, ...user };
  content = (
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
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="col-span-1 my-2 space-y-2">
                  <label
                    className="block text-gray-700 dark:text-primary-50 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Nombre
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    {...formik.getFieldProps("name")}
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 dark:text-primary-50 dark:bg-primary-970 leading-tight  ${
                      formik.touched.name && formik.errors.name
                        ? "outline  outline-red-400"
                        : ""
                    }`}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div
                      className={` text-sm ${
                        formik.touched.name && formik.errors.name
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="col-span-1 my-2 space-y-2">
                  <label
                    className="block text-gray-700 dark:text-primary-50 text-sm font-bold mb-2"
                    htmlFor="category"
                  >
                    Categoría
                  </label>
                  <select
                    name="category"
                    id="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 bg-white dark:text-primary-50 dark:bg-primary-970 cursor-pointer leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="categoria-1">Categoria 1</option>
                    <option value="categoria-2">Categoria 2</option>
                    <option value="categoria-3">Categoria 3</option>
                    <option value="categoria-4">Categoria 4</option>
                  </select>
                </div>
                <div className="col-span-2 my-2 space-y-2">
                  <label
                    className="block text-gray-700 dark:text-primary-50 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Descripción
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 dark:text-primary-50 dark:bg-primary-970 leading-tight  ${
                      formik.touched.description && formik.errors.description
                        ? "outline  outline-red-400"
                        : ""
                    }`}
                    required
                    rows="5"
                  />
                  {formik.touched.description && formik.errors.description ? (
                    <div
                      className={` text-sm ${
                        formik.touched.description && formik.errors.description
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {formik.errors.description}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-span-2 my-2 space-y-2">
                <label
                  htmlFor="photo"
                  className="block text-gray-700 dark:text-primary-50 text-sm font-bold mb-2"
                >
                  Foto del servidor:
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/png, image/jpeg"
                />
              </div>
              <div className="text-right mt-10">
                <button
                  type="submit"
                  className="bg-primary-400 hover:bg-primary-300 dark:bg-secondary-400 dark:hover:bg-secondary-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
  // }

  return <div>{content}</div>;
};

export default ServerConfigurationInfo;

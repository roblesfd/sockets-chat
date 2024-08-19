/*
username
name
email
password
accountstatus
avatar
status
age
roles
servers
friends
createdat
*/

import { Field, Formik } from "formik";
import * as Yup from "yup";
// import { useGetAUserQuery, useUpdateUserMutation } from "./usersApiSlice";
import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";

let initialValues = {
  username: "",
  name: "",
  email: "",
  password: "",
  age: "",
};

const passwordRegExp = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/;

const checkoutSchema = Yup.object().shape({
  username: Yup.string().required("Este campo es obligatorio"),
  name: Yup.string(),
  email: Yup.string()
    .email("Dirección de correo inválida")
    .required("Este campo es obligatorio"),
  password: Yup.string()
    .required("Este campo es obligatorio")
    .min(8, "8 carácteres mínimo")
    .max(18, "18 carácteres máximo")
    .matches(
      passwordRegExp,
      "Al menos una letra, un número y un carácter especial"
    ),
});

const ProfileInfo = () => {
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
                  <label htmlFor="username">
                    Nombre de usuario <small>(Requerido)</small>
                  </label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    {...formik.getFieldProps("username")}
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 dark:text-primary-50 dark:bg-primary-970 leading-tight  ${
                      formik.touched.username && formik.errors.username
                        ? "outline  outline-red-400"
                        : ""
                    }`}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div
                      className={` text-sm ${
                        formik.touched.username && formik.errors.username
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
                <div className="col-span-1 my-2 space-y-2">
                  <label htmlFor="name">Nombre</label>
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
                  <label htmlFor="email">
                    Correo electrónico <small>(Requerido)</small>
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    {...formik.getFieldProps("email")}
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 dark:text-primary-50 dark:bg-primary-970 leading-tight  ${
                      formik.touched.email && formik.errors.email
                        ? "outline  outline-red-400"
                        : ""
                    }`}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div
                      className={` text-sm ${
                        formik.touched.email && formik.errors.email
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="col-span-1 my-2 space-y-2">
                  <label htmlFor="password">
                    Contraseña <small>(Requerido)</small>
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 dark:text-primary-50 dark:bg-primary-970 leading-tight  ${
                      formik.touched.password && formik.errors.password
                        ? "outline  outline-red-400"
                        : ""
                    }`}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div
                      className={` text-sm ${
                        formik.touched.password && formik.errors.password
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="col-span-1 my-2 space-y-2">
                  <label htmlFor="username">Edad</label>
                  <input
                    id="age"
                    type="text"
                    name="age"
                    {...formik.getFieldProps("age")}
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 dark:text-primary-50 dark:bg-primary-970 leading-tight  ${
                      formik.touched.age && formik.errors.age
                        ? "outline  outline-red-400"
                        : ""
                    }`}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.age}
                  />
                  {formik.touched.age && formik.errors.age ? (
                    <div
                      className={` text-sm ${
                        formik.touched.age && formik.errors.age
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {formik.errors.age}
                    </div>
                  ) : null}
                </div>
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

  return (
    <>
      <div className="mx-auto">{content}</div>
    </>
  );
};

export default ProfileInfo;

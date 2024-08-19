import { useGetUsersQuery } from "../user/usersApiSlice";
import { useEstablishNewPasswordMutation } from "./authApiSlice";
import * as Yup from "yup";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const initialValues = {
  password1: "",
  password2: "",
};

const passwordRegExp = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/;

const checkoutSchema = Yup.object().shape({
  password1: Yup.string()
    .required("Este campo es obligatorio")
    .min(8, "8 carácteres mínimo")
    .max(18, "18 carácteres máximo")
    .matches(
      passwordRegExp,
      "Al menos una letra, un número y un carácter especial"
    ),
  password2: Yup.string()
    .required("Este campo es obligatorio")
    .min(8, "8 carácteres mínimo")
    .max(18, "18 carácteres máximo")
    .matches(
      passwordRegExp,
      "Al menos una letra, un número y un carácter especial"
    )
    .oneOf([Yup.ref("password1")], "Las contraseñas deben coincidir"),
});

const NewPassword = () => {
  const [isPasswordChanged, setIsPasswordChange] = useState(false);
  const [establishNewPassword] = useEstablishNewPasswordMutation();
  let currentUser;
  const { token } = useParams();

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery("usersList");

  if (isSuccess) {
    currentUser = Object.values(users.entities).find(
      (user) => user.token === token
    );
  }

  const onSubmitPassword = async (e, formik) => {
    e.preventDefault();
    const { password1 } = formik.values;
    const objectUpdated = {
      password: password1,
      token: token,
    };

    const result = await establishNewPassword({ ...objectUpdated });
    if (result.error) {
      if (result.error?.data) {
        toast.error(result.error.data.message);
      }
    } else {
      toast.success(result.data?.message);
      setIsPasswordChange(true);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-8 py-8 text-primary-950">
        <h2 className="text-2xl font-bold text-center mb-6">
          Establecer una contraseña nueva
        </h2>
        <p className="block text-sm mb-6" htmlFor="password"></p>
        <Formik initialValues={initialValues} validationSchema={checkoutSchema}>
          {(formik) => {
            return (
              <form
                onSubmit={(e) => {
                  onSubmitPassword(e, formik);
                }}
              >
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="password1"
                  >
                    Contraseña
                  </label>
                  <input
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700   leading-tight  ${
                      formik.touched.password1 &&
                      formik.errors.password1 &&
                      "outline  outline-red-400"
                    }
                      ${
                        formik.touched.password1 &&
                        !formik.errors.password1 &&
                        "outline  outline-green-300"
                      }
                    `}
                    id="password1"
                    type="password"
                    value={formik.values.password1}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.touched.password1 && formik.errors.password1 ? (
                    <div
                      className={` text-sm mt-2 ${
                        formik.touched.password1 &&
                        formik.errors.password1 &&
                        "text-red-500"
                      }`}
                    >
                      {formik.errors.password1}
                    </div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="password2"
                  >
                    Repite la contraseña
                  </label>
                  <input
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700   leading-tight  ${
                      formik.touched.password2 &&
                      formik.errors.password2 &&
                      "outline  outline-red-400"
                    }
                      ${
                        formik.touched.password2 &&
                        !formik.errors.password2 &&
                        "outline  outline-green-300"
                      }
                    `}
                    id="password2"
                    type="password"
                    value={formik.values.password2}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.touched.password2 && formik.errors.password2 ? (
                    <div
                      className={` text-sm mt-2 ${
                        formik.touched.password2 &&
                        formik.errors.password2 &&
                        "text-red-500"
                      }`}
                    >
                      {formik.errors.password2}
                    </div>
                  ) : null}
                </div>
                <div className="text-right mt-8">
                  {isPasswordChanged ? (
                    <Link
                      to="/ingresar"
                      className="bg-primary-400 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Iniciar sesión
                    </Link>
                  ) : (
                    <button
                      type="submit"
                      className="bg-primary-400 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Crear contraseña nueva
                    </button>
                  )}
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default NewPassword;

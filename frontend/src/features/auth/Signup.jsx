import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { useAddNewUserMutation } from "@/features/user/usersApiSlice";
import { useNavigate } from "react-router-dom";

const passwordRegExp = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/;

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const checkoutSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "6 carácteres mínimo")
    .max(20, "20 carácteres máximo")
    .required("Este campo es obligatorio"),
  password: Yup.string()
    .required("Este campo es obligatorio")
    .min(8, "8 carácteres mínimo")
    .max(18, "18 carácteres máximo")
    .matches(
      passwordRegExp,
      "Al menos una letra, un número y un carácter especial"
    ),
  email: Yup.string()
    .email("Dirección de correo inválida")
    .required("Este campo es obligatorio"),
});

const Signup = () => {
  const [addNewUser] = useAddNewUserMutation();
  const navigate = useNavigate();

  const onSaveUserClicked = async (e, formik) => {
    e.preventDefault();
    const values = formik.values;
    const result = await addNewUser({ ...values });
    if (result.error) {
      toast.error("Error al crear la cuenta");
    } else {
      toast.success("Tu cuenta de usuario ha sido creada");
      formik.resetForm();
      setTimeout(() => {
        navigate("/cuenta-creada");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full  px-8 py-8 text-primary-950">
        <h2 className="text-2xl font-bold text-center mb-6">
          Regístro de cuenta
        </h2>
        <Formik initialValues={initialValues} validationSchema={checkoutSchema}>
          {(formik) => {
            return (
              <form onSubmit={(e) => onSaveUserClicked(e, formik)}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Nombre de usuario
                  </label>
                  <input
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight  ${
                      formik.touched.username &&
                      formik.errors.username &&
                      "outline  outline-red-400"
                    }
                    ${
                      formik.touched.username &&
                      !formik.errors.username &&
                      "outline  outline-green-300"
                    }
                    `}
                    id="username"
                    type="text"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    required
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div
                      className={` text-sm mt-2 ${
                        formik.touched.username &&
                        formik.errors.username &&
                        "text-red-500"
                      }`}
                    >
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700  leading-tight  ${
                      formik.touched.email &&
                      formik.errors.email &&
                      "outline  outline-red-400"
                    }
                    ${
                      formik.touched.email &&
                      !formik.errors.email &&
                      "outline  outline-green-300"
                    }`}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div
                      className={` text-sm mt-2 ${
                        formik.touched.email &&
                        formik.errors.email &&
                        "text-red-500"
                      }`}
                    >
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700  leading-tight  ${
                      formik.touched.password &&
                      formik.errors.password &&
                      "outline  outline-red-400"
                    }
                    ${
                      formik.touched.password &&
                      !formik.errors.password &&
                      "outline  outline-green-300"
                    }`}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    required
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div
                      className={` text-sm mt-2 ${
                        formik.touched.password &&
                        formik.errors.password &&
                        "text-red-500"
                      }`}
                    >
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button
                    type="submit"
                    className="bg-primary-400 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Registrarme
                  </button>
                  <Link
                    className="inline-block align-baseline font-bold text-sm text-primary-950"
                    to="/ingresar"
                  >
                    ¿Ya tienes una cuenta? Iniciar sesión
                  </Link>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;

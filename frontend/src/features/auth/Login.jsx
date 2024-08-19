import { Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import PulseLoader from "react-spinners/PulseLoader";

const initialValues = {
  username: "",
  password: "",
};

const checkoutSchema = Yup.object().shape({
  username: Yup.string().required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const onSaveUserClicked = async (values) => {
    const result = await login({ ...values });

    if (result.error) {
      console.log(result.error);
      toast.error(result.error?.data?.message);
    } else {
      dispatch(setCredentials({ result }));
      toast.success("Has iniciado sesión");
      setTimeout(() => {
        navigate("/inicio");
      }, 2000);
    }
  };

  if (isLoading) return <PulseLoader color={"#FFF"} />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full rounded px-8 py-8 text-primary-950">
        <h2 className="text-2xl font-bold text-center mb-6">
          Inicio de sesión
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
                    className="block text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Nombre de usuario
                  </label>
                  <input
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700   leading-tight  ${
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
                    value={formik.values.username}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
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
                <div className="mb-6">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <input
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight  ${
                      formik.touched.password &&
                      formik.errors.password &&
                      "outline  outline-red-400"
                    }
                            
                      ${
                        formik.touched.password &&
                        !formik.errors.password &&
                        "outline  outline-green-300"
                      }
                    `}
                    id="password"
                    type="password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
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
                  <div>
                    <Link
                      className="text-sm hover:text-primary-200"
                      to="/recuperacion-de-contrasena"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button
                    type="submit"
                    className="bg-primary-400 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Ingresar
                  </button>
                  <Link
                    className="inline-block align-baseline font-bold text-sm text-primary-950"
                    to="/registrarse"
                  >
                    ¿No tienes una cuenta? Regístrate
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

export default Login;

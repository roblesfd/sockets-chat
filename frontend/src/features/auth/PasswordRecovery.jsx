import { usePasswordRecoveryMutation } from "./authApiSlice";
import * as Yup from "yup";
import { Formik } from "formik";
import toast from "react-hot-toast";

const initialValues = {
  email: "",
};

const checkoutSchema = Yup.object().shape({
  email: Yup.string()
    .email("Dirección de correo inválida")
    .required("Este campo es obligatorio"),
});

const PasswordRecovery = () => {
  const [passwordRecovery] = usePasswordRecoveryMutation();

  const onSubmitEmail = async (e, formik) => {
    e.preventDefault();
    const { email } = formik.values;
    const result = await passwordRecovery(email);
    if (result.error) {
      if (result.error?.data) {
        toast.error(result.error.data.message);
      }
    } else {
      toast.success(result.data?.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-8 py-8 text-primary-950">
        <h2 className="text-2xl font-bold text-center mb-6">
          Reestablecer la contraseña
        </h2>
        <p className="block text-sm mb-6" htmlFor="email">
          Ingresa tu correo electrónico, te enviaremos un enlace a tu bandeja de
          entrada para reestablecer tu contraseña
        </p>
        <Formik initialValues={initialValues} validationSchema={checkoutSchema}>
          {(formik) => {
            return (
              <form
                onSubmit={(e) => {
                  onSubmitEmail(e, formik);
                }}
              >
                <div className="mb-4">
                  <input
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700   leading-tight  ${
                      formik.touched.email &&
                      formik.errors.email &&
                      "outline  outline-red-400"
                    }
                      ${
                        formik.touched.email &&
                        !formik.errors.email &&
                        "outline  outline-green-300"
                      }
                    `}
                    id="email"
                    type="email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
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
                <div className="text-right mt-8">
                  <button
                    type="submit"
                    className="bg-primary-400 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Reestablecer contraseña
                  </button>
                  {/* <Link
                    className="inline-block align-baseline font-bold text-sm text-primary-950"
                    to="/ingresar"
                  >
                    ¿Ya tienes una cuenta? Iniciar sesión
                  </Link> */}
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default PasswordRecovery;

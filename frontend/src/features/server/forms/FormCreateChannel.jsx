import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  channelName: "",
};

const checkoutSchema = Yup.object().shape({
  channelName: Yup.string().required("Este campo es obligatorio"),
});

const FormCreateChannel = () => {
  const onSaveUserClicked = (values) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full rounded px-8 py-8 text-primary-950">
        <h2 className="text-2xl font-bold text-center mb-6">Crear un canal</h2>
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
                    htmlFor="channelName"
                  >
                    Nombre del canal
                  </label>
                  <input
                    className={`shadow border rounded-md w-full py-2 px-3 text-gray-700   leading-tight  ${
                      formik.touched.channelName &&
                      formik.errors.channelName &&
                      "outline  outline-red-400"
                    }
                      ${
                        formik.touched.channelName &&
                        !formik.errors.channelName &&
                        "outline  outline-green-300"
                      }
                    `}
                    id="channelName"
                    type="text"
                    value={formik.values.channelName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.touched.channelName && formik.errors.channelName ? (
                    <div
                      className={` text-sm mt-2 ${
                        formik.touched.channelName &&
                        formik.errors.channelName &&
                        "text-red-500"
                      }`}
                    >
                      {formik.errors.channelName}
                    </div>
                  ) : null}
                </div>
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

export default FormCreateChannel;

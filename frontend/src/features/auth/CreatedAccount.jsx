import { Link } from "react-router-dom";

const CreatedAccount = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-center">
      <div className="max-w-md w-full px-8 py-8 text-primary-950">
        <h2 className="text-2xl font-bold  mb-6">
          Tu cuenta ha sido creada exitosamente
        </h2>
        <p>
          Para poder utlizar tu cuenta, enviamos un enlace a tu dirección de
          correo para confirmar tu cuenta
        </p>
        <p className=" mt-4 font-semibold text-xl text-primary-400 hover:text-primary-200">
          <Link to="/inicio">Volver al inicio</Link>
        </p>
      </div>
    </div>
  );
};

export default CreatedAccount;

const FormInvitePeople = ({ invitation }) => {
  const { link, expires } = invitation;

  const handleClick = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="w-full h-[200px] py-2 text-primary-950">
      <h2 className="text-2xl font-bold text-center mb-6">
        Invitar amigos al servidor
      </h2>
      <p className="text-xs mb-4">
        ¡Comparte este enlace con otros para otorgarles acceso a tu servidor!
      </p>
      <div className="flex justify-between items-center gap-2 mb-4">
        <input
          type="text"
          name=""
          id=""
          value={link}
          className="shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight bg-primary-600 text-primary-30"
        />
        <button
          className="bg-primary-400 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleClick}
        >
          Copiar
        </button>
      </div>
      <p className="text-xs text-left">
        Tu enlace de invitación expira en {expires}
      </p>
    </div>
  );
};

export default FormInvitePeople;

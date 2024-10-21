// /components/ui/Button.js
const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

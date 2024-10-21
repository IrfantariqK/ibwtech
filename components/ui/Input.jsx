// /components/ui/Input.js
export function Input({ id, name, type = "text", ...props }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className="w-full p-2 border rounded-md"
      {...props}
    />
  );
}

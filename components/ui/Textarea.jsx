// /components/ui/Textarea.js
export function Textarea({ id, name, rows = 4, ...props }) {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      className="w-full p-2 border rounded-md"
      {...props}
    />
  );
}

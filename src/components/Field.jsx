export const Field = ({ label, field, errors }) => {
  return (
    <div className="mt-4 w-full">
      <label className="flex flex-col">
        <span className="font-bold">{label}</span>
        <input
          {...field}
          className="border border-gray-300 rounded-md text-lg px-2 py-1 focus:outline-none"
        />
      </label>
      {errors && <p className="text-red-400">{errors}</p>}
    </div>
  );
};

interface Props {
  title: string;
  error: any;
  register: any;
  placeholder: string;
  type: string;
}

export default function Input({
  title,
  error,
  register,
  placeholder,
  type,
}: Props) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <p className="mb-0 text-sm md:text-base md:medium">{title}</p>
        <p className="text-red-600 text-xs md:text-sm text-right">{error}</p>
      </div>
      <input
        {...register}
        type={type}
        className={`p-2 border rounded-lg w-full text-base ${
          error && `border-red-600 `
        }`}
        placeholder={placeholder}
      />
    </div>
  );
}

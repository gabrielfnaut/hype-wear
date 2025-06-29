
import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 font-ramaraja text-3xl">
      <input type="checkbox" className="h-6 w-6 rounded-md border-2 border-[#B2C1E6] bg-transparent" {...props} />
      {label}
    </label>
  );
}

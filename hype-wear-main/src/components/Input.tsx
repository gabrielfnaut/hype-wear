
import { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="bg-[#B2C1E6] border border-black rounded-lg p-2 w-full"
      {...props}
    />
  );
}

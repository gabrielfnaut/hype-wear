
import { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="bg-[#B2C1E6] bg-opacity-60 rounded-lg p-2"
      {...props}
    />
  );
}

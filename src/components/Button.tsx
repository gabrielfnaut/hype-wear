
import { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-[#B2C1E6] bg-opacity-60 rounded-lg p-2 font-ramaraja text-2xl"
      {...props}
    />
  );
}


import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-ramaraja text-2xl">{label}</label>
      <textarea
        className="bg-[#B2C1E6] bg-opacity-60 rounded-lg p-2 h-40"
        {...props}
      />
    </div>
  );
}

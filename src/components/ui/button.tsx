import { type ComponentProps } from "react";
import { Loading } from "./loading";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean
}

export function Button({ isLoading, ...props }: ButtonProps) {
  const children = isLoading ? <Loading /> : props.children
  return (
    <button
      className="flex items-center justify-center gap-4 text-center  -bg--primary disabled:-bg--primary/60 text-background  rounded-md py-1.5 px-2"
      {...props}
    >
      {children}
    </button>

  )
}

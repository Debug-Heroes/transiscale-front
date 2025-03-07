import { ComponentProps, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends ComponentProps<'input'> {
  error?: boolean
}
const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {
  return (
    <input
      className={twMerge("border w-full -border--border bg-background p-2 rounded-sm",
        error && 'border-red-400')}
      ref={ref}
      {...props}
    />
  )
})


Input.displayName = "Input"

export default Input

import { type ComponentProps } from "react"

type ErrorProps = ComponentProps<'span'>

export function Error(props: ErrorProps) {
  return <span className="h-1 -mt-2 text-xs text-red-400 font-bold" {...props} />
}

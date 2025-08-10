import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border-2 border-plateado-200 bg-white/90 px-3 py-2 text-base ring-offset-background placeholder:text-plateado-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosa-gold-500 focus-visible:ring-offset-2 focus-visible:border-rosa-gold-400 hover:border-plateado-300 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }

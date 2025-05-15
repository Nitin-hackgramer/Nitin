import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
      {...props}
    >
      <h2 className="h2 mb-3">{title}</h2>
      {subtitle && (
        <p className={cn(
          "text-muted-foreground p-large",
          centered && "mx-auto max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

const SectionHeading = ({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      )}
      <div
        className={cn("mt-4 h-1 w-24 rounded bg-primary", {
          "mx-auto": align === "center",
          "ml-0": align === "left",
          "mr-0": align === "right",
        })}
      />
    </div>
  );
};

export default SectionHeading;

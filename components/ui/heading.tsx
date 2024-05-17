import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export const Heading = ({
  title,
  description,
  className,
  children,
  ...props
}: HeadingProps) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center flex-wrap gap-5",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-1 max-w-5xl">
        <h3 className="text-3xl md:text-4xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
};

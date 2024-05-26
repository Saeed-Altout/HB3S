import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HTMLAttributes } from "react";
import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface WidgetProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  icon: LucideIcon;
  glucose?: string;
}

export const Widget = ({
  children,
  className,
  title,
  description,
  icon: Icon,
  glucose,
  ...props
}: WidgetProps) => {
  return (
    <Card {...props} className={cn("", className)}>
      <CardHeader className="space-y-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl tracking-wide">{title}</CardTitle>
          <Button size="icon" variant="ghost">
            <Icon className="h-6 w-6" />
          </Button>
        </div>
        <CardDescription className="tracking-wide text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {glucose && (
        <CardFooter>
          <p>Glucose</p>
        </CardFooter>
      )}
    </Card>
  );
};

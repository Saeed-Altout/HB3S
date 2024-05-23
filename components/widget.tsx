"use client";

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

interface WidgetProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  icon: LucideIcon;
}

export const Widget = ({
  children,
  className,
  title,
  description,
  icon: Icon,
  ...props
}: WidgetProps) => {
  return (
    <Card {...props}>
      <CardHeader>
        <Button size="icon" variant="ghost">
          <Icon className="h-5 w-5" />
        </Button>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <p>Glucose</p>
      </CardFooter>
    </Card>
  );
};

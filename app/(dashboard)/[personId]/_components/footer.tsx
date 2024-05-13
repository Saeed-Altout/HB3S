import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="bg-white h-12 flex justify-end items-center gap-x-4 px-4">
      <Button
        variant="ghost"
        size="sm"
        className="text-xs text-muted-foreground"
      >
        Privacy & policy
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="text-xs text-muted-foreground"
      >
        Terms
      </Button>
    </div>
  );
};

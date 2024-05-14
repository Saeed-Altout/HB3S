import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 z-20 bg-background w-full border-t shadow-sm h-12 flex justify-end items-center gap-x-4 px-4">
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

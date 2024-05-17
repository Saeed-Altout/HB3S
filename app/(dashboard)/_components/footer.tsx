import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 z-30 flex h-14 items-center gap-4 bg-background px-4 sm:px-6">
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

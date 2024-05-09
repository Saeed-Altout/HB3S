import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-end w-full">
        <Button size="sm" variant="link" className="text-sm">
          Privacy Policy
        </Button>
        <Button size="sm" variant="link" className="text-sm">
          Terms of Service
        </Button>
      </div>
    </footer>
  );
};

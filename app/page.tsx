import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-y-5 text-center">
        <h1 className="text-6xl font-semibold text-white tracking-wider">
          HB3S 🚀
        </h1>
        <p className="text-xl font-medium text-white">
          Measuring Blood Glucose by A Non-Invasive method
        </p>
        <LoginButton>
          <Button variant="outline">Sign in</Button>
        </LoginButton>
      </div>
    </main>
  );
}

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex justify-center items-center bg-purple-700">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white tracking-wider">
          Auth
        </h1>
        <p className="text-xl font-medium text-white">
          A simple authentication server
        </p>
        <Button variant="outline">Sign in</Button>
      </div>
    </main>
  );
}

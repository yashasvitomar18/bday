import LoginGate from "@/components/LoginGate";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <LoginGate>
      <main className="min-h-screen w-full relative">
        <Landing />
      </main>
    </LoginGate>
  );
}

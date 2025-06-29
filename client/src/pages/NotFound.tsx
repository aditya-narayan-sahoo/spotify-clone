import { Home, Music2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      <section className="text-center space-y-8 w-full max-w-lg">
        <div className="flex justify-center animate-bounce">
          <Music2
            className="h-24 w-24 text-emerald-500"
            aria-label="Music icon"
          />
        </div>

        <header className="space-y-2">
          <h1 className="text-7xl font-bold text-white">404</h1>
          <h2 className="text-2xl font-semibold text-white">Page not found</h2>
        </header>

        <p className="text-neutral-400">
          Looks like this track got lost in the shuffle. Let's get you back to
          the music.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700 w-full sm:w-auto"
            aria-label="Go back to previous page"
          >
            Go Back
          </Button>

          <Button
            onClick={() => navigate("/")}
            className="bg-emerald-500 hover:bg-emerald-600 text-white w-full sm:w-auto"
            aria-label="Go to homepage"
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
        </div>
      </section>
    </main>
  );
}

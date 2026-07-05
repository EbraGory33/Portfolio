import { Navigation } from "./Navigation";

function Header() {
  return (
    <header className="fixed top-2.5 z-5000 w-full md:top-4">
      <Navigation />
    </header>
  );
}
export { Header };

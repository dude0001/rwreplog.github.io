import Grid from "@/components/grid";
import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/floatingNav";
import { FaHouse } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHouse /> },
            { name: "About", link: "#about" },
          ]}
        />
        <Hero></Hero>
        <Grid></Grid>
      </div>
    </main>
  );
}

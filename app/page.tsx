import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Sections } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Sections />
      </main>
      <Footer />
    </>
  );
}

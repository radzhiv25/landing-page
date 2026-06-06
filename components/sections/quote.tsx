import Image from "next/image";
import { quoteBackgroundImage } from "@/lib/images";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function QuoteSection() {
  return (
    <section
      id="section-3"
      className={`relative min-h-[520px] overflow-hidden ${montserrat.className}`}
    >
      <Image
        src={quoteBackgroundImage}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1180px] items-center px-8 py-20 lg:px-12">
        <div className="max-w-3xl">
          <blockquote className="text-[1.65rem] leading-[1.45] font-bold text-white sm:text-[2rem] lg:text-[2.35rem]">
            &ldquo; We have created an environment ideal for building craft. Our
            goal is to be recognized as the best tennis performance centre in
            the world. &rdquo;
          </blockquote>

          <div className="mt-8 h-px w-full max-w-2xl bg-white/70" />

          <footer className="mt-6">
            <p className="text-lg font-semibold text-white">John Doe</p>
            <p className="mt-1 text-sm text-white/75">Chairman</p>
          </footer>
        </div>
      </div>
    </section>
  );
}

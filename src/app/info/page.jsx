import ScrollerLanguages from "./scrollerLanguages/page";

export default function Page() {
  return (
    <section className="flex flex-col justify-center items-center h-full">
      <div className="container mx-auto px-6 py-12 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">DOMINIK</h1>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">PLAUDER</h1>
        <h3 className="text-3xl md:text-5xl font-semibold mb-4">FULL STACK</h3>
        <h3 className="text-3xl md:text-5xl font-semibold mb-6">DEVELOPER</h3>
        <p className="text-xl md:text-2xl mt-4">
          With a focus on <span className="text-orange-500">REACT</span>,{" "}
          <span className="text-violet-500">.NET</span> and{" "}
          <span className="text-green-500">PHP</span>
        </p>
      </div>
      <div className="w-full max-w-[25%]">
        <ScrollerLanguages />
      </div>
    </section>
  );
}

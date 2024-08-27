"use client";

export default function Page() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-40 m-4"
    >
      <div className="about rounded-lg p-8 max-w-4xl w-full">
        <h3 className="text-3xl mb-5 font-bold">
          Hi, I am <span className="text-red-500 text-4xl">D</span>OMINIK
        </h3>
        <h5 className="text-xl mb-6">
          Nice to meet you. Please take a look around.
        </h5>
        <p className="text-lg mb-4">
          I am a dedicated application developer with a passion for creating
          efficient and user-friendly software solutions. With my sales
          background, I specialize in building robust applications that meet
          clients' needs.
        </p>
        <p className="text-lg">
          I thrive on solving complex problems and continuously strive to stay
          updated with the latest industry trends and technologies. My goal is
          to deliver high-quality, scalable applications that provide value and
          enhance user experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <div className="border-b-4 border-orange-500 text-center py-4">
          <h3 className="text-2xl">
            <span className="text-orange-500 text-3xl">D</span>esign
          </h3>
        </div>
        <div className="border-t-4 border-violet-500 text-center py-4">
          <h3 className="text-2xl">
            <span className="text-violet-500 text-3xl">D</span>
            evelopment
          </h3>
        </div>
        <div className="border-b-4 border-green-500 text-center py-4">
          <h3 className="text-2xl">
            <span className="text-green-500 text-3xl">F</span>ull Stack
          </h3>
        </div>
      </div>
    </div>
  );
}

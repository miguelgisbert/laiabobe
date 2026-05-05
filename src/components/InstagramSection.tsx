import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/laiabobe/";
const INSTAGRAM_USER = "laiabobe";

export default function InstagramSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-md mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Uneix-te a la meva{" "}
          <em className="not-italic font-bold text-coral-500">comunitat</em>{" "}
          d&apos;Instagram!
        </h2>

        {/* Instagram icon */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 mb-5 transition-transform hover:scale-110"
          aria-label="Instagram de Laia Bobé"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-14 h-14"
          >
            <defs>
              <radialGradient
                id="ig-grad"
                cx="19%"
                cy="99%"
                r="115%"
                fx="19%"
                fy="99%"
              >
                <stop offset="0%" stopColor="#ffd600" />
                <stop offset="20%" stopColor="#ff7a00" />
                <stop offset="40%" stopColor="#ff0069" />
                <stop offset="70%" stopColor="#d300c5" />
                <stop offset="100%" stopColor="#7638fa" />
              </radialGradient>
            </defs>
            <rect width="48" height="48" rx="12" fill="url(#ig-grad)" />
            <rect
              x="6"
              y="6"
              width="36"
              height="36"
              rx="9"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            />
            <circle
              cx="24"
              cy="24"
              r="9"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            />
            <circle cx="34.5" cy="13.5" r="2" fill="white" />
          </svg>
        </a>

        {/* Profile photo */}
        <div className="flex justify-center mb-3">
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-coral-200 shadow-md">
            <Image
              src="/images/laia1.png"
              alt="Laia Bobé a Instagram"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Username */}
        <p className="text-lg font-semibold text-gray-800 mb-1">
          @{INSTAGRAM_USER}
        </p>

        {/* CTA button */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-coral-500 text-white px-8 py-3 my-5 rounded-full font-semibold hover:bg-coral-600 transition-colors shadow-lg hover-lift"
        >
          M&apos;uneixo a la comunitat
        </a>
      </div>
    </section>
  );
}

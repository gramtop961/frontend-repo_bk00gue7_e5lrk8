import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero3D() {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        {/* 3D Scene */}
        <Spline
          scene="https://prod.spline.design/7xWm0k1i9d1mKxVo/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient overlay that does not block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10">
        <div className="w-full bg-white/80 backdrop-blur rounded-xl p-5 sm:p-8 shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                StrongWheels
              </h1>
              <p className="mt-2 text-gray-700 max-w-2xl">
                Book JCBs, excavators, tippers, cranes, and tempos instantly across Karnataka.
                Real-time tracking, UPI payments, and Kannada-first support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#book" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300">
                Book a Vehicle
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#fleet" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-50">
                Explore Fleet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Loader2, ServerCog } from "lucide-react";

export default function Loading() {
  return (
    <main
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      overflow-hidden
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-black
      text-white
      "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        h-[500px]
        w-[500px]
        rounded-full
        bg-cyan-500/20
        blur-[140px]
        animate-pulse
        "
      />

      <div
        className="
        absolute
        right-0
        top-0
        h-[450px]
        w-[450px]
        rounded-full
        bg-blue-600/20
        blur-[150px]
        animate-pulse
        "
      />

      <div
        className="
        absolute
        bottom-0
        left-0
        h-[450px]
        w-[450px]
        rounded-full
        bg-indigo-600/20
        blur-[140px]
        animate-pulse
        "
      />

      {/* Main Card */}
      <section
        className="
        relative
        flex
        w-[95%]
        max-w-xl
        flex-col
        items-center
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-10
        shadow-2xl
        backdrop-blur-xl
        "
      >
        {/* Logo */}
        <div
          className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          border
          border-cyan-500/30
          bg-cyan-500/10
          "
        >
          <ServerCog
            className="
            h-12
            w-12
            text-cyan-400
            "
          />
        </div>

        {/* Spinner */}
        <Loader2
          className="
          mt-8
          h-14
          w-14
          animate-spin
          text-cyan-400
          "
        />

        {/* Heading */}
        <h1
          className="
          mt-8
          text-center
          text-4xl
          font-extrabold
          tracking-wide
          "
        >
          Abhishek Kumar
        </h1>

        <p
          className="
          mt-3
          text-center
          text-lg
          text-slate-300
          "
        >
          Loading Portfolio...
        </p>

        {/* Progress */}
        <div
          className="
          mt-10
          h-2
          w-full
          overflow-hidden
          rounded-full
          bg-slate-700
          "
        >
          <div
            className="
            h-full
            w-1/2
            animate-[loading_2s_linear_infinite]
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-indigo-500
            "
          />
        </div>

        {/* Animated Dots */}
        <div
          className="
          mt-8
          flex
          gap-3
          "
        >
          <span
            className="
            h-3
            w-3
            animate-bounce
            rounded-full
            bg-cyan-400
            "
          />

          <span
            className="
            h-3
            w-3
            animate-bounce
            rounded-full
            bg-blue-500
            [animation-delay:0.2s]
            "
          />

          <span
            className="
            h-3
            w-3
            animate-bounce
            rounded-full
            bg-indigo-500
            [animation-delay:0.4s]
            "
          />
        </div>

        {/* Bottom Text */}
        <p
          className="
          mt-8
          text-center
          text-sm
          tracking-widest
          uppercase
          text-slate-400
          "
        >
          DevOps • Cloud • Automation • AWS
        </p>
      </section>
    </main>
  );
}
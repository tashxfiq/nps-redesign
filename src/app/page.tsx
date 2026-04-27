"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ParkGrid from "@/components/ParkGrid";
import VoiceFeatureBlock from "@/components/VoiceFeatureBlock";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import VoiceAssistant from "@/components/VoiceAssistant";

export default function Home() {
  const [voiceOpen, setVoiceOpen] = useState(false);
  const openAI = () => setVoiceOpen(true);

  return (
    <main className="relative">
      <Navbar onAskAI={openAI} />
      <Hero onAskAI={openAI} />
      <Categories />
      <ParkGrid />
      <VoiceFeatureBlock onAskAI={openAI} />
      <Stories />
      <Footer />

      {/* Floating voice button */}
      <button
        onClick={openAI}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-forest-900 hover:bg-forest-800 text-sand-50 pl-3 pr-5 py-3 rounded-full shadow-lift border border-forest-700 transition"
        aria-label="Open Ranger AI"
      >
        <span className="relative w-10 h-10 rounded-full bg-forest-500 flex items-center justify-center voice-pulse">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z" />
            <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </span>
        <span className="hidden sm:flex flex-col items-start leading-tight">
          <span className="text-sm font-semibold">Ask Ranger</span>
          <span className="text-[10px] text-sand-200/80">Voice + chat</span>
        </span>
      </button>

      <VoiceAssistant open={voiceOpen} onClose={() => setVoiceOpen(false)} />
    </main>
  );
}

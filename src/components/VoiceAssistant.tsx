"use client";

import { useEffect, useRef, useState } from "react";
import { PARKS } from "@/data/parks";

type Message = {
  role: "ranger" | "user";
  text: string;
  suggestions?: string[];
  parkIds?: string[];
};

const STARTER: Message = {
  role: "ranger",
  text: "Hi, I'm Ranger — your AI guide to America's parks. Tell me what kind of trip you're dreaming of.",
  suggestions: [
    "A quiet park to stargaze",
    "Waterfall hike in California",
    "Family-friendly camping",
    "Best fall foliage right now",
  ],
};

// A tiny rule-based response engine — feels intelligent without an API.
function generateReply(input: string): Message {
  const q = input.toLowerCase();

  if (/star|night|astro|dark sky/.test(q)) {
    return {
      role: "ranger",
      text:
        "Stargazing is magic in the dark-sky parks. Glacier and Great Basin are top tier this time of year. Want me to pull up Glacier?",
      suggestions: ["Yes, show Glacier", "What about Acadia?", "I want warmer weather"],
      parkIds: ["glacier"],
    };
  }
  if (/water|fall|river/.test(q)) {
    return {
      role: "ranger",
      text:
        "Yosemite is unmatched for waterfalls — Vernal, Nevada, and Bridalveil are all flowing. Should I plan the Mist Trail for you?",
      suggestions: ["Plan Mist Trail", "Show me Yosemite"],
      parkIds: ["yosemite"],
    };
  }
  if (/family|kid|child|easy/.test(q)) {
    return {
      role: "ranger",
      text:
        "Acadia's Park Loop Road and Great Smoky's Cades Cove are both gentle and full of wildlife — perfect for families.",
      suggestions: ["Show Acadia", "Show Great Smoky", "I need accessible trails"],
      parkIds: ["acadia", "great-smoky"],
    };
  }
  if (/foliage|fall|autumn|color/.test(q)) {
    return {
      role: "ranger",
      text:
        "Right now, Great Smoky Mountains and Acadia are peaking — golds, ambers, and that classic crimson maple.",
      suggestions: ["Show fall picks", "Best week to visit?"],
      parkIds: ["great-smoky", "acadia"],
    };
  }
  if (/quiet|solitude|alone|crowd/.test(q)) {
    return {
      role: "ranger",
      text:
        "For solitude, Olympic's Hoh Rainforest or the back-country of Glacier are perfect — fewer crowds, deeper silence.",
      suggestions: ["Show Olympic", "Permits I'll need"],
      parkIds: ["olympic", "glacier"],
    };
  }
  if (/utah|zion|canyon|desert/.test(q)) {
    return {
      role: "ranger",
      text:
        "Zion is a stunner — hike the Narrows or Angels Landing (permit required). I can pull weather and shuttle times.",
      suggestions: ["Show Zion", "What's the weather?"],
      parkIds: ["zion"],
    };
  }

  // default suggestion
  const random = PARKS[Math.floor(Math.random() * PARKS.length)];
  return {
    role: "ranger",
    text: `Got it. Based on what you said, you might love ${random.name} — ${random.tagline.toLowerCase()}. Should I look closer?`,
    suggestions: ["Yes, explore", "Try again", "Show me a different vibe"],
    parkIds: [random.id],
  };
}

export default function VoiceAssistant({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([STARTER]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [confirmAsked, setConfirmAsked] = useState(false);
  const recognitionRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Set up Web Speech API recognition (only on client)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const SR =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;
    const rec = new SR();
    rec.continuous = false;
    rec.interimResults = true;
    rec.lang = "en-US";
    rec.onresult = (e: any) => {
      let transcript = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        transcript += e.results[i][0].transcript;
      }
      setInput(transcript);
      if (e.results[e.results.length - 1].isFinal) {
        setListening(false);
        setTimeout(() => handleSend(transcript), 200);
      }
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
  }, []);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const speak = (text: string) => {
    if (typeof window === "undefined") return;
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1.02;
    utter.pitch = 1.0;
    synth.speak(utter);
  };

  const handleSend = (text?: string) => {
    const value = (text ?? input).trim();
    if (!value) return;
    const userMsg: Message = { role: "user", text: value };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);
    setConfirmAsked(false);
    setTimeout(() => {
      const reply = generateReply(value);
      setMessages((m) => [...m, reply]);
      setThinking(false);
      speak(reply.text);
      // Mirror the case study: ask "Is this what you were looking for?"
      setTimeout(() => setConfirmAsked(true), 600);
    }, 900);
  };

  const startListening = () => {
    if (!recognitionRef.current) {
      alert("Voice search isn't supported in this browser. Try Chrome or Safari.");
      return;
    }
    setListening(true);
    setInput("");
    try {
      recognitionRef.current.start();
    } catch {}
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  if (!open) return null;

  const lastReply = [...messages].reverse().find((m) => m.role === "ranger");
  const parkChips = lastReply?.parkIds
    ? PARKS.filter((p) => lastReply.parkIds!.includes(p.id))
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div
        className="absolute inset-0 bg-forest-950/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full md:max-w-xl bg-sand-50 md:rounded-3xl rounded-t-3xl shadow-lift overflow-hidden border border-forest-100 animate-[slideUp_0.4s_cubic-bezier(0.2,0.7,0.2,1)]">
        {/* Header */}
        <div className="bg-forest-900 text-sand-50 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className={`w-11 h-11 rounded-full bg-forest-500 flex items-center justify-center ${listening ? "voice-pulse relative" : ""}`}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-sand-50" fill="currentColor">
                  <path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z" />
                  <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-display text-lg font-semibold">Ranger</div>
              <div className="text-xs text-sand-200/70 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-300 animate-pulse" />
                Voice AI · always here
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 6 12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="h-[420px] overflow-y-auto px-5 py-6 space-y-4 bg-sand-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] ${m.role === "user" ? "" : "flex gap-3"}`}>
                {m.role === "ranger" && (
                  <div className="w-8 h-8 rounded-full bg-forest-700 flex-shrink-0 flex items-center justify-center text-sand-50 text-xs font-bold mt-1">R</div>
                )}
                <div>
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-forest-700 text-sand-50 rounded-br-sm"
                        : "bg-white text-forest-900 rounded-bl-sm border border-forest-100 shadow-soft"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.role === "ranger" && m.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {m.suggestions.map((s) => (
                        <button
                          key={s}
                          onClick={() => handleSend(s)}
                          className="px-3 py-1.5 rounded-full text-xs bg-white border border-forest-200 text-forest-800 hover:bg-forest-50 transition"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Park preview cards triggered by reply */}
          {parkChips.length > 0 && !thinking && (
            <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {parkChips.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl overflow-hidden bg-white border border-forest-100 shadow-soft"
                >
                  <div
                    className="h-28 bg-cover bg-center"
                    style={{ backgroundImage: `url(${p.hero})` }}
                  />
                  <div className="p-3">
                    <div className="font-display font-semibold text-forest-900 text-sm">{p.name}</div>
                    <div className="text-[11px] text-forest-600">{p.state} · ⭐ {p.rating}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {thinking && (
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-forest-700 flex items-center justify-center text-sand-50 text-xs font-bold">R</div>
              <div className="bg-white border border-forest-100 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1.5 shadow-soft">
                <span className="w-2 h-2 rounded-full bg-forest-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-forest-400 animate-bounce" style={{ animationDelay: "120ms" }} />
                <span className="w-2 h-2 rounded-full bg-forest-400 animate-bounce" style={{ animationDelay: "240ms" }} />
              </div>
            </div>
          )}

          {confirmAsked && !thinking && (
            <div className="ml-11">
              <div className="px-4 py-3 rounded-2xl bg-forest-50 border border-forest-200 text-forest-900 text-sm flex items-center justify-between gap-3">
                <span>Is this what you were looking for?</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setMessages((m) => [
                        ...m,
                        { role: "ranger", text: "Awesome — I'll save these to your trip board." },
                      ]);
                      setConfirmAsked(false);
                    }}
                    className="px-3 py-1.5 rounded-full bg-forest-600 hover:bg-forest-700 text-sand-50 text-xs font-medium"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      setConfirmAsked(false);
                      handleSend("try again");
                    }}
                    className="px-3 py-1.5 rounded-full bg-bark-700 hover:bg-bark-600 text-sand-50 text-xs font-medium"
                  >
                    No, try again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Composer */}
        <div className="border-t border-forest-100 bg-white px-4 py-3">
          <div className="flex items-center gap-2">
            <button
              onClick={listening ? stopListening : startListening}
              className={`relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition ${
                listening
                  ? "bg-forest-700 text-sand-50 voice-pulse"
                  : "bg-forest-50 text-forest-700 hover:bg-forest-100 border border-forest-200"
              }`}
              aria-label="Voice search"
            >
              {listening ? (
                <div className="flex items-end gap-0.5 h-5">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="wave-bar w-0.5 bg-sand-50 rounded"
                      style={{ height: "100%", animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              ) : (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z" />
                  <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              )}
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={listening ? "Listening…" : "Ask Ranger anything…"}
              className="flex-1 bg-sand-50 rounded-full px-5 py-3 text-sm text-forest-900 placeholder-forest-400 outline-none border border-forest-100 focus:border-forest-400 transition"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="px-5 h-12 rounded-full bg-forest-700 disabled:opacity-40 hover:bg-forest-800 text-sand-50 text-sm font-medium transition"
            >
              Send
            </button>
          </div>
          <div className="text-[10px] text-forest-500 mt-2 text-center">
            Voice powered by your browser · No data leaves your device for transcription
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

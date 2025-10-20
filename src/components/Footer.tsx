"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="/images/logoCoral.svg"
            alt="Laia Bobé Logo Blau"
            width={160}
            height={60}
            className="mx-auto h-16 w-auto"
            style={{
              filter:
                "grayscale(1) brightness(0.7) sepia(1) hue-rotate(180deg)",
            }}
          />
        </div>
        <p className="text-gray-300 mb-8">
          Especialista en educació emocional, docent i coach
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="mailto:contactar@laiabobe.com"
            className="text-gray-300 hover:text-white text-lg font-semibold underline"
          >
            contactar@laiabobe.com
          </a>
          <a
            href="https://www.instagram.com/laiabobe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 text-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="inline h-6 w-6"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/laia-andr%C3%A9s-bob%C3%A9-24b86847/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 text-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="inline h-6 w-6"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © 2025 Laia Bobé. Tots els drets reservats.
        </p>
      </div>
    </footer>
  );
}

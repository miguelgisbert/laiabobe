"use client";

import { useState } from "react";
import { useToast } from "./ToastProvider";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nom: "",
    telefon: "",
    email: "",
    missatge: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.showToast({
          type: "success",
          message: "Missatge enviat correctament! Et respondré aviat.",
        });
        setFormData({ nom: "", telefon: "", email: "", missatge: "" });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        toast.showToast({
          type: "error",
          message:
            data.error || "Error enviant el missatge. Torna-ho a provar.",
        });
      }
    } catch (error) {
      toast.showToast({
        type: "error",
        message: "Error de connexió. Torna-ho a provar més tard.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          aria-label="Tancar"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-coral-600 mb-4">
          Contacta amb mi
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nom <span className="text-coral-500">*</span>
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
              placeholder="El teu nom"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email <span className="text-coral-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
              placeholder="el.teu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="telefon"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Telèfon
            </label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
              placeholder="123 456 789"
            />
          </div>

          <div>
            <label
              htmlFor="missatge"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Missatge <span className="text-coral-500">*</span>
            </label>
            <textarea
              id="missatge"
              name="missatge"
              value={formData.missatge}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
              placeholder="Escriu el teu missatge aquí..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-coral-500 text-white py-3 rounded-full font-semibold hover:bg-coral-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviant..." : "Enviar missatge"}
          </button>
        </form>
      </div>
    </div>
  );
}

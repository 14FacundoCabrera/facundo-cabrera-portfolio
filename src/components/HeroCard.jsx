// src/components/HeroCard.jsx
// Opcionalmente, puedes usar la Estrategia 2 de mi respuesta anterior
// para renderizar el icono si también necesitas que sea dinámico.
import React from "react";

// Si necesitas la misma funcionalidad de astro-icon,
// usa Iconify: npm install @iconify/react
import { Icon } from "@iconify/react";

export default function HeroCard({ title, icon, learned }) {
  return (
    <div className="flex items-center p-3 bg-slate-500 rounded aspect-square size-28">
      {/* Usar el Icono de React si es necesario */}
      {icon && <Icon icon={icon} class={"size-200 text-slate-900"} />}
      <div class="absolute size-28 hover:bg-black/40 active:bg-black/40 opacity-0 hover:opacity-100 active:opacity-100 -translate-x-3 ease-in-out duration-300 transition-all flex items-center justify-center flex-col">
        <p class="font-bold text-center cursor-default">{title}</p>
        <p class="font-semibold text-xs text-center cursor-default">
          {learned}
        </p>
      </div>
    </div>
  );
}

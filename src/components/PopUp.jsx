import { useState } from "react";
import HeroCard from "./HeroCard";

export default function HeroPopup({ Entries = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-slate-400 hover:bg-slate-500 duration-200 text-black font-bold px-3 py-1 rounded border border-gray-600"
      >
        Ver Tecnologías.
      </button>

      {open && (
        <div className="bg-black/50 fixed inset-0 z-50 flex justify-center items-center">
          <div className="flex flex-wrap gap-3 p-4 bg-slate-900 rounded-2xl max-w-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full text-right text-white"
            >
              ✕
            </button>
            <div className="flex flex-wrap gap-3 ps-6 max-w-xl">
              {Entries.map(
                (i) =>
                  i && (
                    <HeroCard
                      key={i.id}
                      title={i.data.title}
                      icon={i.data.icon}
                      learned={i.data.learned}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

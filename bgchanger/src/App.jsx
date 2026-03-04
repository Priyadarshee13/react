import { useState } from "react";

export default function App() {
  const [bgColor, setBgColor] = useState("bg-slate-100");

  const colors = [
    { name: "Red", value: "bg-red-500" },
    { name: "Green", value: "bg-green-500" },
    { name: "Blue", value: "bg-blue-500" },
    { name: "Yellow", value: "bg-yellow-400" },
    { name: "Purple", value: "bg-purple-500" },
    { name: "Black", value: "bg-gray-900" },
    { name: "White", value: "bg-white" },
  ];

  const textColor = bgColor === "bg-gray-900" ? "text-white" : "text-gray-900";

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300 flex flex-col items-center justify-center gap-5`}>
      <h1 className={`text-3xl font-bold ${textColor}`}>Background Changer</h1>

      <div className="flex flex-wrap justify-center gap-3">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => setBgColor(color.value)}
            className={`px-4 py-2 rounded-lg font-semibold border border-black/10 shadow ${color.value} ${
              color.value === "bg-yellow-400" || color.value === "bg-white" ? "text-gray-900" : "text-white"
            }`}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

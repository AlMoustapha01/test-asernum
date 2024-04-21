"use client";
import { useState } from "react";

const SendingModeSelector: React.FC<{ data: string[] }> = ({
  data,
}: {
  data: string[];
}) => {
  const [selectedMode, setSelectedMode] = useState<string>(data[0]);

  return (
    <div className="flex space-x-2 items-center mb-4">
      {data.map((mode) => (
        <button
          key={mode}
          className={`px-4 py-2 rounded ${
            selectedMode === mode
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setSelectedMode(mode)}
        >
          {mode}
        </button>
      ))}
    </div>
  );
};

export default SendingModeSelector;

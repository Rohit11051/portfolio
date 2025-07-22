import React, { useEffect, useState } from "react";

const lines = [
  "> Initializing...",
  "> Scanning vulnerabilities...",
  "> Access granted. Welcome.",
];

const TerminalIntro = ({ onFinish }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[currentLine]]);
        setCurrentLine(currentLine + 1);
      }, 1500);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onFinish();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentLine]);

  return (
    <div className="fixed inset-0 bg-black text-pink-500 font-mono text-lg p-8 flex items-center justify-center z-[9999]">
      <div>
        {displayedLines.map((line, index) => (
          <div key={index} className="animate-pulse">{line}</div>
        ))}
        <div className="animate-blink">█</div>
      </div>
    </div>
  );
};

export default TerminalIntro;
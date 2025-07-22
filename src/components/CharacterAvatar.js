import React from "react";
import "./CharacterAvatar.css";

const CharacterAvatar = () => {
  return (
    <div className="relative w-64 mx-auto mt-10">
      {/* Use public path */}
      <img src="/avatar_light.png" alt="Avatar" className="w-full h-auto" />

      {/* Smoke puff animation */}
      <div className="absolute smoke left-[72%] top-[39%]"></div>
    </div>
  );
};

export default CharacterAvatar;
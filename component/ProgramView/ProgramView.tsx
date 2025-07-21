import React from "react";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";

const programs = [
  "S1 Informatika",
  "S1 Sistem Informasi",
  "S1 Informasi Akuntansi",
];

const ProgramView = () => {
  return (
    <div className="mt-40 text-center">
      <Subtitle>OUR PRODI</Subtitle>
      <Title>Program Studi</Title>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {programs.map((e) => (
          <div
            key={e}
            className="flex h-40 items-center justify-center bg-gradient-to-b from-[#1e066b] to-[#24010b] text-2xl text-white"
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramView;

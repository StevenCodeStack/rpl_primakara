import React from "react";
import requirementImage from "@/public/images/requirement-image.png";
import Image from "next/image";

const requirements = [
  "Minimal telah lulus Sekolah Menengah Atas atau Sederajat",
  "Memiliki pengalaman Kerja minimal 2 tahun, atau program pelatihan kerja yang relevan dengan program studi tujuan.",
];

const RequirementView = () => {
  return (
    <div className="bg-black text-white">
      <div className="globalLayout flex min-h-200 flex-col justify-center gap-10 md:flex-row">
        <div className="flex flex-col gap-10 md:w-1/2">
          <h1 className="text-4xl font-semibold tracking-wide md:mt-20 lg:text-5xl">
            KUALIFIKASI DAN SYARAT MENGIKUTI PROGRAM KELAS RPL
          </h1>
          {requirements.map((e) => (
            <div className="" key={e}>
              <div className="flex items-center gap-5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 480 512"
                  height="50px"
                  width="50px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 text-[#3aa6b9]"
                >
                  <path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path>
                </svg>
                <p className="text-lg lg:text-xl">{e}</p>
              </div>
              <div className="mt-5 h-[1px] w-full bg-slate-700" />
            </div>
          ))}
        </div>
        <div className="relative h-140 md:h-200 md:w-1/2">
          <Image
            src={requirementImage}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default RequirementView;

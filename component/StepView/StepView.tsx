import React from "react";
import image1 from "@/public/images/step-image-1.png";
import image2 from "@/public/images/step-image-2.jpg";
import Image from "next/image";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";
import Button from "../UI/Button";

const steps = [
  "Pendaftaran dan Konsultasi",
  "Menyiapkan Dokumen yang sesuai dengan ketentuan",
  "Pengisian Formulir Evaluasi Diri",
  "Penilaian dari Asesor",
  "Pengumuman Hasil Rekognisi",
  "Pendaftaran Ulang",
  "Mendapatkan Identitas Mahasiswa",
];

const StepView = () => {
  return (
    <div className="globalLayout flex flex-col justify-center gap-15 !py-30 text-black md:flex-row">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="relative aspect-[5/3] w-full">
          <Image
            src={image1}
            className="absolute top-0 rounded-4xl object-cover"
            alt=""
          />
        </div>
        <div className="relative">
          <Image
            src={image2}
            className="absolute -top-20 right-0 rounded-4xl border-10 border-white object-cover md:-right-6"
            alt=""
          />
        </div>
      </div>
      <div className="md:w-1/2">
        <Subtitle>REQUIREMENT</Subtitle>
        <Title className="mt-5">
          LANGKAH MUDAH MENDAFTAR PROGRAM KELAS RPL PRIMAKARA
        </Title>

        <div className="mt-10">
          {steps.map((e) => (
            <div key={e} className="text-lg">
              <span className="flex items-center gap-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#2997aa]"
                >
                  <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path>
                </svg>
                {e}
              </span>
            </div>
          ))}
        </div>

        <Button className="mt-20 border-2 border-black">Daftar Sekarang</Button>
      </div>
    </div>
  );
};

export default StepView;

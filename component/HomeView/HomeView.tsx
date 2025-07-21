import Image from "next/image";
import React from "react";
import PrimakaraLogo from "../../public/images/primakara_logo_hitam_putih.png";
import PrimakaraBg from "../../public/images/univ_bg.jpg";
import Button from "../UI/Button";

const HomeView = () => {
  return (
    <div className="relative min-h-[75dvh] text-white md:h-[100dvh]">
      <Image src={PrimakaraBg} fill className="object-cover" alt="" />
      <div className="absolute inset-0 z-0 bg-[#002168] opacity-60" />

      <div className="relative z-10">
        <div className="globalLayout !pt-10">
          <div className="relative">
            <Image
              src={PrimakaraLogo}
              alt=""
              className="h-8 w-auto object-contain sm:h-12 md:h-14"
            />
          </div>
          <h1 className="font-manrope mt-16 text-5xl font-semibold md:mt-30 md:max-w-[60%] md:text-6xl md:tracking-tight lg:mt-40">
            Kelas Rekognisi Pembelajaran Lampau (RPL)
          </h1>
          <p className="mt-10 text-base md:text-xl md:leading-8">
            Kelas Rekognisi Pembelajaran Lampau (RPL) Primakara University
            adalah program pendidikan yang dirancang untuk mengakui pengalaman
            dan pengetahuan yang telah Anda peroleh di dunia kerja atau
            pendidikan informal lainnya. Melalui RPL Primakara University, Anda
            dapat mengonversi pengalaman tersebut menjadi kredit akademik,
            sehingga mempercepat proses untuk memperoleh gelar Sarjana hingga
            1.5 Tahun.
          </p>
          <Button className="mt-20 border-2 border-white">
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeView;

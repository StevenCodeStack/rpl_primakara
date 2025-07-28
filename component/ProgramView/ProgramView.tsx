import React from "react";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";
import Informatika from "@/public/images/informatika.jpg";
import SistemInformasi from "@/public/images/sistem_informasi.jpg";
import SistemInformasiAkuntansi from "@/public/images/sistem_informasi_akuntansi.jpg";
import Image from "next/image";

const programs = [
  { id: 1, content: "S1 Informasi", image: Informatika },
  { id: 2, content: "S1 Sistem Informasi", image: SistemInformasi },
  { id: 3, content: "S1 Informasi Akuntansi", image: SistemInformasiAkuntansi },
];

const ProgramView = () => {
  return (
    <div className="mt-40 text-center">
      <Subtitle>OUR PRODI</Subtitle>
      <Title>Program Studi</Title>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {programs.map((e) => (
          <div key={e.id} className="h-90 rounded-2xl bg-white p-6">
            <div className="max-h=[80%] relative aspect-[4/3]">
              <Image
                src={e.image}
                alt=""
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <p className="font-manrope mt-3 text-center text-lg font-semibold">
              {e.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramView;

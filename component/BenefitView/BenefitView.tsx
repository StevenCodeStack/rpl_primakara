import React from "react";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";
import image1 from "@/public/images/image-1.png";
import image2 from "@/public/images/image-2.png";
import image3 from "@/public/images/image-3.png";
import Image from "next/image";
import ProgramView from "../ProgramView/ProgramView";

const benefits = [
  {
    id: 1,
    image: image1,
    content: "Biaya Terjangkau dan Lebih Rendah dari kelas Reguler",
  },
  { id: 2, image: image2, content: "Waktu tempuh kuliah yang lebih singkat" },
  {
    id: 3,
    image: image3,
    content:
      "Waktu perkuliahan yang lebih fleksibel tanpa mengganggu jam kerja",
  },
];

const BenefitView = () => {
  return (
    <div className="bg-white-bg py-20">
      <div className="globalLayout">
        <Subtitle classname="text-center font">BENEFIT</Subtitle>
        <Title className="mt-3 text-center">
          Keuntungan Mengikuti Kelas RPL
        </Title>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((e) => (
            <div key={e.id} className="min-h-90 rounded-2xl bg-white p-6">
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

        <ProgramView />
      </div>
    </div>
  );
};

export default BenefitView;

import Image from "next/image";
import React from "react";
import PrimakaraLogo from "@/public/images/primakara_logo_hitam_putih.png";
import Button from "../UI/Button";

type LinkType = { title: string; link: string; id: number };

const bisnis = [
  { id: 1, title: "Akuntansi", link: "/" },
  { id: 2, title: "Bisnis Digital", link: "/" },
  { id: 3, title: "Manajemen", link: "/" },
];

const informatika = [
  { id: 1, title: "Informatika", link: "/informatika" },
  { id: 2, title: "Sistem Informasi", link: "/sistem-informasi" },
  { id: 3, title: "Sistem Informasi Akuntansi", link: "/" },
  { id: 4, title: "Desain Komunikasi Visual", link: "/" },
];

const desktop = [
  { id: 1, title: "Pendidikan", link: "/pendidikan" },
  {
    id: 2,
    title: "Tentang Kami",
    link: "/tentang-kami",
    children: [
      { id: 3, title: "Fasilitas", link: "/fasilitas" },
      { id: 4, title: "Struktur Organisasi", link: "/struktur" },
    ],
  },
  { id: 5, title: "Kehidupan Kampus", link: "/kampus" },
  { id: 6, title: "Riset & Pengabdian", link: "/riset" },
];

const addNav = [
  { id: 1, title: "Mahasiswa", link: "/" },
  { id: 2, title: "Fasilitas", link: "/" },
  { id: 3, title: "Berita & Kegiatan", link: "/" },
  { id: 4, title: "Kontak", link: "/" },
];

const Footer = () => {
  return (
    <div className="bg-bg bg-black pt-20 text-white">
      <div className="globalLayout grid-cold-1 grid gap-25 !py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="">
          <h1 className="text-xl font-bold">PRIMAKARA UNIVERSITY</h1>
          <div className="mt-8 flex flex-col gap-2 text-lg">
            <p className="">
              Jalan Tukad Badung No 135, Denpasar, Bali - 80226
            </p>
            <Button className="my-1 bg-white text-black transition-all hover:bg-slate-200">
              Lihat Maps
            </Button>
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
              <p>+62 361 895 6084</p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56zm-14.18 92.63-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26z"></path>
              </svg>
              <p>info@primakara.ac.id</p>
            </div>
            <div className="flex gap-3">
              <div className="border border-white p-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </div>
              <div className="border border-white p-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </div>
              <div className="border border-white p-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">PROGRAM STUDI</h1>
          <div className="mt-8 flex flex-col gap-2 text-lg">
            <h1 className="text-slate-400">
              Fakultas Teknologi Informasi dan Desain
            </h1>
            {informatika.map((e: LinkType) => (
              <a href={e.link} key={e.id}>
                {e.title}
              </a>
            ))}
            <h1 className="mt-5 text-slate-400">Fakultas Ekonomi dan Bisnis</h1>
            {bisnis.map((e: LinkType) => (
              <a key={e.id} href={e.link}>
                {e.title}
              </a>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">HALAMAN PENTING</h1>
          <div className="mt-8 flex flex-col gap-2 text-lg">
            {desktop.map((e: LinkType) => (
              <a key={e.id} href={e.link}>
                {e.title}
              </a>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">LINK TERKAIT</h1>
          <div className="mt-8 flex flex-col gap-2 text-lg">
            {addNav.map((e: LinkType) => (
              <a key={e.id} href={e.link}>
                {e.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-600 py-6">
        <div className="globalLayout flex flex-col items-center justify-between gap-5 !py-8 md:flex-row">
          <Image
            src={PrimakaraLogo}
            alt="Primakara Logo"
            className="h-fit w-50 brightness-0 invert"
          />
          <h1 className="">Copyright © 2023 Primakara University</h1>
          <h1>Design by ___</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

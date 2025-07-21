"use client";
import React, { useState } from "react";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";

const faqs = [
  {
    question: "Keuntungan apa saja yang didapatkan dari kelas RPL?",
    answer:
      "Biaya pendidikan yang lebih terjangkau, waktu tempuh pendidikan S1 singkat hanya dalam waktu 1.5 tahun*, hingga sistem perkuliahan yang fleksibel.",
  },
  {
    question: "Siapa sajakah yang bisa mengikuti kelas RPL Primakara?",
    answer:
      "Siapa saja minimal lulusan SMA/Sederajat, yang sudah memiliki pengalaman kerja minimal 2 tahun, atau program pelatihan yang relevan dengan program studi tujuan.",
  },
  {
    question: "Berapa lama waktu tempuh kuliah untuk Kelas RPL Primakara?",
    answer:
      "Waktu yang ditempuh bervariasi, didasarkan pada pengalaman kerja. Peserta program RPL dapat mendapat gelar sajana paling cepat 1,5 Tahun.",
  },
  {
    question:
      "Apakah saya bisa melakukan konsultasi terlebih dahulu saat mendaftar kelas RPL Primakara?",
    answer:
      "Sangat Bisa, Primakara siap membantu proses konsultasi kepada calon Mahasiswa, memberikan informasi yang jelas mengenai Kelas RPL, Proses Pendaftaran, hingga Proses Perkuliahan.",
  },
  {
    question:
      "Apa saja syarat dokumen yang diperlukan untuk mendaftar program RPL?",
    answer:
      "Terdapat beberapa dokumen pendukung yang perlu disiapkan, mulai dari transkrip akademik traktir, berbagai sertifikat yang dimiliki, curriculum vitae, hingga dokumen jobdesk pekerjaan.",
  },
  {
    question:
      "Jika saya mendaftar, berapa lama saya harus menunggu proses asesmen RPL?",
    answer:
      "Proses asesmen untuk menilai pengalaman kerja dan pendidikan informal oleh asesor adalah 7 hari sejak dokumen Form Evaluasi Diri Diisi.",
  },
  {
    question: "Kapan saja periode pendaftaran RPL di Primakara University?",
    answer:
      "Periode pendaftaran RPL di Primakara University dibedakan menjadi 2, pada semester Ganjil dan semester Genap. Sehingga calon mahasiswa dapat mendaftar kapanpun dengan waktu tunggu paling lama 6 bulan untuk mengikuti kuliah.",
  },
  {
    question: "Jika saya memiliki pertanyaan, kemana saya dapat bertanya?",
    answer:
      "Jika memiliki pertanyaan, silahkan hubungi kami segera melalui form pendaftaran. Kami akan segera menghubungi kamu dan menjawab semua pertanyaan kamu.",
  },
  {
    question: "Apa yang dimaksud dengan kelas Rekognisi Pembelajaran Lampau?",
    answer:
      "Kelas Rekognisi Pembelajaran Lampau (RPL) adalah program pendidikan yang memungkinkan Anda mendapatkan pengakuan atas pengalaman kerja, pelatihan, atau pembelajaran informal yang pernah Anda lakukan sebelumnya. Dengan RPL, Anda dapat mempercepat proses studi untuk memperoleh gelar akademik dengan mengkonversi pengalaman Anda menjadi kredit akademik. Program ini dirancang untuk mendukung profesional yang ingin melanjutkan pendidikan tanpa harus memulai dari awal.",
  },
];

const QuestionView = () => {
  const [indexOpen, setIndexOpen] = useState<number | null>(null);
  return (
    <div className="globalLayout text-center">
      <Subtitle>FAQ</Subtitle>
      <Title>Frequently Asked Question</Title>

      <div className="mt-10 grid grid-cols-1 gap-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="h-fit overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg"
            onClick={() =>
              index === indexOpen ? setIndexOpen(null) : setIndexOpen(index)
            }
          >
            {/* Question Row (with icon and separator) */}
            <div className="flex cursor-pointer items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                {/* Icon (changes when expanded) */}
                <svg
                  className={`h-4 w-4 shrink-0 ${index === indexOpen ? "text-blue-800" : "text-blue-600"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <h3 className="text-start font-semibold text-gray-800 md:text-lg">
                  {faq.question}
                </h3>
              </div>
            </div>

            {/* Separator Line */}
            <div className="mx-6 border-t border-gray-200"></div>

            {/* Answer (initially hidden, expand with JS/React state) */}
            <div
              className={`${indexOpen === index ? "h-auto pt-2 pb-6" : "invisible h-0"} px-6 text-gray-600 transition-all ease-in-out`}
            >
              <p className="text-start text-sm md:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionView;

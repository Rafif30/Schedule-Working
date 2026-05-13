'use client'

import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ScheduleCard() {
  const router = useRouter()
  const [nik, setNik] = useState<number | null>(null)
  return (
    <section className="rounded-2xl border border-[#C49A0A]e/10 bg-[#C49A0A] p-8 shadow-2xl backdrop-blur-sm">
      <h2 className="mb-2 text-4xl font-semibold text-white md:text-5xl">
        Cek Jadwal Anda
      </h2>

      <p className="mb-8 text-lg text-white-300">
        Masukkan Nomor Induk Karyawan (NIK) untuk melihat jadwal shift
      </p>

      <div>
        <label
          htmlFor="nik"
          className="mb-3 block text-sm font-medium text-white-300"
        >
          Nomor Induk Karyawan (NIK)
        </label>

        <div className="flex flex-col gap-4 md:flex-row">
          <input
            id="nik"
            type="number"
            inputMode="numeric"
            placeholder="Contoh: 1024"
            className="h-12 flex-1 rounded-lg border border-[#F5F0E8]/10 bg-[#F5F0E8] p-4 text-black placeholder:text-black-300 focus:border-blue-500 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            onChange={(e) => setNik(Number(e.target.value))}
            onWheel={(e) => e.currentTarget.blur()}
            min={0}
          />

          <button
            type="button"
            className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#a67f02] px-6 font-medium text-white transition hover:bg-[#917004] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!nik}
            onClick={() => router.push(`/schedule/${nik}`)}
          >
            <Search />

            Cari Jadwal
          </button>
        </div>
      </div>
    </section>
  );
}
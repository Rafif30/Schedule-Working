import { Calendar } from 'lucide-react';
import ScheduleCard from '@/components/Form'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* Header */}
      <header className="mb-12 bg-[#C49A0A] px-6 py-5 shadow-lg">
        <div className='flex max-w-6xl mx-auto items-center gap-4'>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#a67f02]">
            <Calendar />
          </div>

          <div>
            <h1 className="text-2xl font-semibold">
              Jadwal Karyawan
            </h1>
            <p className="text-sm text-white-300">
              Sistem Informasi Jadwal Toko
            </p>
          </div>
        </div>
      </header>
      {/* Main Card */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <ScheduleCard />
      </div>
    </main>
  );
}
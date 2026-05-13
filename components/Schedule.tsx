'use client'

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, Clock3, MapPin, User } from 'lucide-react';
import { ScheduleList, DetailRow, SummaryCard } from './List';
import { useRouter } from 'next/navigation';

type Schedule = {
  id: number;
  date: string;
  day: string;
  session: string;
  time: string;
  location: string;
  pic: string;
  sessionColor: string;
};

type propsSchedules = {
  schedules: Schedule[]
}

export default function Schedule({ schedules }: propsSchedules) {
  const [selected, setSelected] = useState<Schedule | null>(null);
  const route = useRouter()

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.section
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6 mx-auto max-w-6xl bg-[#F5F0E8]"
          >
            <h3 className="mb-4 text-sm font-semibold tracking-[0.25em] text-black uppercase">
            Total Modul
            </h3>

            <div className="mb-8 grid md:grid-cols-6 grid-cols-2 gap-4">
                <SummaryCard value="4" label="Done" />
                <SummaryCard value="2" label="Not Done" />
            </div>

            <h3 className="mb-4 text-sm font-semibold tracking-[0.25em] text-[#1C2B4A] uppercase">
                Jadwal Shift
            </h3>
            <div className="md:grid md:grid-cols-4 gap-4">
                {schedules.map((item) => (
                <ScheduleList key={`${item.date}-${item.session}`} item={item} onClick={() => setSelected(item)} />
                ))}
            </div>
            <button
                onClick={() => route.push('/')}
                className="mt-6 w-full rounded-xl bg-[#C59D00] px-4 py-3 font-semibold text-white transition hover:brightness-110"
            >
            Kembali Input NIK
            </button>
          </motion.section>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#F3EFE8]"
          >

            {/* Detail */}
            <div className="p-6 text-[#3B2F1E]">
              <div className="mb-4 rounded-2xl border border-[#D8C8A2] bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold">
                      {selected.day}, {selected.date}
                    </p>
                    <p className="text-sm text-[#9C8B63]">
                      Jadwal berlaku hari ini
                    </p>
                  </div>
                  <span className="rounded-full bg-[#C59D00] px-3 py-1 text-sm text-white">
                    Hari ini
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#D8C8A2] bg-white">
                <div className="flex items-center justify-between bg-[#C59D00] p-4 text-white">
                  <div>
                    <h4 className="text-xl font-semibold">{selected.session}</h4>
                    <p className="text-sm text-white/80">Sesi kerja</p>
                  </div>
                  <span className="rounded-full bg-black/10 px-3 py-1 text-sm">
                    Pagi
                  </span>
                </div>

                <div className="divide-y divide-[#EADDBD] text-sm">
                  <DetailRow icon={<MapPin className="h-4 w-4" />} label="Toko" value={selected.location} />
                  <DetailRow icon={<User className="h-4 w-4" />} label="PIC" value={selected.pic} />
                  <DetailRow icon={<CalendarDays className="h-4 w-4" />} label="Tanggal" value={`${selected.day}, ${selected.date}`} />
                  <DetailRow icon={<Clock3 className="h-4 w-4" />} label="Jam kerja" value={selected.time} />
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 w-full rounded-xl bg-[#C59D00] px-4 py-3 font-semibold text-white transition hover:brightness-110"
              >
                Kembali ke List Jadwal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
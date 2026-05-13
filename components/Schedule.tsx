'use client'

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, Clock3, MapPin, User, Briefcase } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Schedule = {
  id: number;
  date: string;
  day: string;
  session: string;
  time: string;
  location: string;
  employeeName: string;
  position: string;
  sessionColor: string;
};

const schedules: Schedule[] = [
  {
    id: 1,
    date: '12 Mei 2026',
    day: 'Senin',
    session: 'Sesi 1',
    time: '08:00 - 14:00',
    location: 'Toko Pusat A',
    employeeName: 'Rudi Hartono',
    position: 'Kasir',
    sessionColor: 'bg-cyan-100 text-cyan-700',
  },
  {
    id: 2,
    date: '13 Mei 2026',
    day: 'Selasa',
    session: 'Sesi 2',
    time: '14:00 - 20:00',
    location: 'Toko Pusat A',
    employeeName: 'Rudi Hartono',
    position: 'Kasir',
    sessionColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 3,
    date: '14 Mei 2026',
    day: 'Rabu',
    session: 'Sesi 1',
    time: '08:00 - 14:00',
    location: 'Cabang Malalayang',
    employeeName: 'Rudi Hartono',
    position: 'Kasir',
    sessionColor: 'bg-cyan-100 text-cyan-700',
  },
];

export default function Schedule() {
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
                  <DetailRow icon={<User className="h-4 w-4" />} label="Nama" value={selected.employeeName} />
                  <DetailRow icon={<Briefcase className="h-4 w-4" />} label="Jabatan" value={selected.position} />
                  <DetailRow icon={<CalendarDays className="h-4 w-4" />} label="Tanggal" value={`${selected.day}, ${selected.date}`} />
                  <DetailRow icon={<Clock3 className="h-4 w-4" />} label="Jam kerja" value={selected.time} />
                  <DetailRow icon={<MapPin className="h-4 w-4" />} label="Toko" value={selected.location} />
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

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      <div className="flex items-center gap-2 text-[#9C8B63]">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-medium text-right">{value}</span>
    </div>
  );
}

function SummaryCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[#F5F0E8]/10 bg-[#fff] p-5">
      <p className="text-4xl font-semibold text-black">{value}</p>
      <p className="mt-2 text-sm text-black/60">{label}</p>
    </div>
  );
}

type ScheduleListProps = {
  item: {
    date: string;
    day: string;
    session: string;
    sessionColor: string;
    today?: boolean;
    time: string;
    location: string;
    active?: boolean;
   };
   onClick: () => void
};

function ScheduleList({ item, onClick }: ScheduleListProps) {
  return (
    <div
      className={`rounded-2xl border p-5 border-white/10 bg-[#C49A0A] hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer mb-4`}
      onClick={onClick}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-3">
            <h4 className="text-2xl font-medium">{item.date}</h4>
            {item.today && (
              <span className="rounded-full bg-[#a67f02] px-3 py-1 text-xs text-white/90 font-medium">
                Hari ini
              </span>
            )}
          </div>
          <p className="text-white/60">{item.day}</p>
        </div>

        <span
          className={`rounded-full px-4 py-1 text-sm font-medium ${item.sessionColor}`}
        >
          {item.session}
        </span>
      </div>

      <div className="space-y-3 border-t border-white/10 pt-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white-800">
            <Clock3 className="h-4 w-4" />
            <span>Jam kerja</span>
          </div>
          <span className="text-right">{item.time}</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white-300">
            <MapPin className="h-4 w-4" />
            <span>Lokasi</span>
          </div>
          <span className="text-right">{item.location}</span>
        </div>
      </div>
    </div>
  );
}
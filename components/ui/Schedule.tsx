'use client'

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ScheduleList, SummaryCard } from './List';
import { DetailSchedule, DetailModule } from './Detail';
import { useRouter } from 'next/navigation';
import { Schedules, ModuleList } from '@/types/schedule';

type propsSchedules = {
  schedules: Schedules[]
  moduleList: ModuleList
}

export default function Schedule({ schedules, moduleList }: propsSchedules) {
  const [selectedSchedule, setSelectedSchedule] = useState<Schedules | null>(null);
  const [selectedModul, setSelectedModul] = useState<'Done' | 'NotDone' | null>(null)
  const route = useRouter()

  const goBack = () => {
    setSelectedSchedule(null)
    setSelectedModul(null)
  }
  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {!selectedSchedule && !selectedModul ? (
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
                <SummaryCard value={moduleList.sumNotDone} label="Not Done" onClick={() => setSelectedModul('NotDone')} />
                <SummaryCard value={moduleList.sumDone} label="Done" onClick={() => setSelectedModul('Done')} />
            </div>

            <h3 className="mb-4 text-sm font-semibold tracking-[0.25em] text-[#1C2B4A] uppercase">
                Jadwal Shift
            </h3>
            <div className="md:grid md:grid-cols-4 gap-4">
                {schedules.map((item) => (
                <ScheduleList key={`${item.date}-${item.session}`} item={item} onClick={() => setSelectedSchedule(item)} />
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
            className="mx-auto max-w-6xl p-6 rounded-3xl bg-[#F3EFE8]"
          >

            {/* Detail Schedule*/}
              {selectedSchedule && (
                <DetailSchedule 
                  date={selectedSchedule.date}
                  day={selectedSchedule.day}
                  session={selectedSchedule.session}
                  time={selectedSchedule.time}
                  location={selectedSchedule.location}
                  pic={selectedSchedule.pic}
                />
              )}

              {/* Detail Module */}
              {selectedModul && (
                <DetailModule 
                  typeModule={selectedModul}
                  sumModule={moduleList[`sum${selectedModul}`]}
                  listModule={moduleList[`list${selectedModul}`]}
                />
              )}

              <button
                onClick={goBack}
                className="mt-6 w-full rounded-xl bg-[#C59D00] px-4 py-3 font-semibold text-white transition hover:brightness-110"
              >
                Kembali ke List Jadwal
              </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
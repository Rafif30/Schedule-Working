import { CalendarDays, Clock3, MapPin, User, DockIcon } from 'lucide-react';
import { DetailRow } from './List';
import { Schedules, Module } from '@/types/schedule';

export function DetailSchedule(props: Schedules) {
    const {date, day, session, time, location, pic} = props
    return (
        <div className="text-[#3B2F1E]">
            <div className="mb-4 rounded-2xl border border-[#D8C8A2] bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <p className="font-semibold">
                            {day}, {date}
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
                        <h4 className="text-xl font-semibold">{session}</h4>
                        <p className="text-sm text-white/80">Sesi kerja</p>
                    </div>
                    <span className="rounded-full bg-black/10 px-3 py-1 text-sm">
                        Pagi
                    </span>
                </div>

                <div className="divide-y divide-[#EADDBD] text-sm">
                    <DetailRow icon={<MapPin className="h-4 w-4" />} label="Toko" value={location} />
                    <DetailRow icon={<User className="h-4 w-4" />} label="PIC" value={pic} />
                    <DetailRow icon={<CalendarDays className="h-4 w-4" />} label="Tanggal" value={`${day}, ${date}`} />
                    <DetailRow icon={<Clock3 className="h-4 w-4" />} label="Jam kerja" value={time} />
                </div>
            </div>
        </div>
    )
}

type ModuleDetailProps = {
    typeModule: string;
    sumModule: number | string;
    listModule: Module[]
}

export function DetailModule(props: ModuleDetailProps) {
    const {typeModule, sumModule, listModule} = props
    const isNotDone = typeModule.toLowerCase().includes('notdone')
    return (
        <div className="text-[#3B2F1E]">
            <div className="overflow-hidden rounded-2xl border border-[#D8C8A2] bg-white">
                <div className="flex items-center justify-between bg-[#C59D00] p-4 text-white">
                    <div>
                        <h4 className="text-xl font-semibold">{typeModule.replace(/([a-z])([A-Z])/g, "$1 $2")}</h4>
                    </div>
                    <span className="rounded-full bg-black/10 px-3 py-1 text-sm">
                        {sumModule} Modul
                    </span>
                </div>

                <div className="divide-y divide-[#EADDBD] text-sm">
                    {listModule.map(module => (
                        <DetailRow key={module.id} icon={<DockIcon className="h-4 w-4" />} label={module.moduleName} value={isNotDone ? module.moduleLink : String(module.grade)} />
                    ))}
                </div>
            </div>
        </div>
    )
}
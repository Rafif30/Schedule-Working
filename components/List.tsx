import { Clock3, MapPin } from 'lucide-react';

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

export function ScheduleList({ item, onClick }: ScheduleListProps) {
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

export function DetailRow({
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

export function SummaryCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[#F5F0E8]/10 bg-[#fff] p-5">
      <p className="text-4xl font-semibold text-black">{value}</p>
      <p className="mt-2 text-sm text-black/60">{label}</p>
    </div>
  );
}
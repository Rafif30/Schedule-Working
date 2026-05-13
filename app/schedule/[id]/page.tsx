import UserProfile from '@/components/UserProfile'
import Schedule from '@/components/Schedule'

const schedules = [
  {
    id: 1,
    date: '12 Mei 2026',
    day: 'Senin',
    session: 'Sesi 1',
    sessionColor: 'bg-emerald-100 text-emerald-700',
    today: true,
    time: '08:00 - 14:00',
    location: 'Toko Pusat A',
    active: true,
    pic: 'Ahmad Budi'
  },
  {
    id: 2,
    date: '13 Mei 2026',
    day: 'Selasa',
    session: 'Sesi 2',
    sessionColor: 'bg-amber-100 text-amber-700',
    time: '14:00 - 20:00',
    location: 'Toko Pusat A',
    pic: 'Ahmad Budi'
  },
  {
    id: 3,
    date: '14 Mei 2026',
    day: 'Rabu',
    session: 'Sesi 1',
    sessionColor: 'bg-cyan-100 text-cyan-700',
    time: '08:00 - 14:00',
    location: 'Cabang Malalayang',
    pic: 'Ahmad Budi'
  },
  {
    id: 4,
    date: '16 Mei 2026',
    day: 'Jumat',
    session: 'Sesi 3',
    sessionColor: 'bg-pink-100 text-pink-700',
    time: '20:00 - 02:00',
    location: 'Toko Pusat A',
    pic: 'Ahmad Budi'
  },
];

const moduleNotDone = [
  {
    id: 1,
    moduleName: 'Belanja',
    moduleLink: 'https://google.com',
    grade: null,
  },
  {
    id: 2,
    moduleName: 'Belanja',
    moduleLink: 'https://google.com',
    grade: null,
  },
  {
    id: 3,
    moduleName: 'Belanja',
    moduleLink: 'https://google.com',
    grade: null,
  },
  {
    id: 4,
    moduleName: 'Belanja',
    moduleLink: 'https://google.com',
    grade: null,
  }
]

const moduleDone = [
  {
    id: 1,
    moduleName: 'Belanja',
    moduleLink: 'https://google.com',
    grade: '90',
  },
  {
    id: 2,
    moduleName: 'Belanja',
    moduleLink: 'https://google.com',
    grade: '80',
  },
]

const listModule = {
  sumNotDone: 4,
  sumDone: 2,
  listNotDone: moduleNotDone,
  listDone: moduleDone,
}

type Props = {
  params: {
    id: string;
  };
};

export default async function SchedulePage({ params }: Props) {
  const { id } = await params
  
  return (
    <main className="min-h-screen bg-[#F5F0E8] text-white">
      <div className="overflow-hidden bg-[#F5F0E8]">
        {/* User Profile */}
        <UserProfile nik={id} />

        {/* Content */}
        <Schedule schedules={schedules} moduleList={listModule} />
      </div>
    </main>
  );
}
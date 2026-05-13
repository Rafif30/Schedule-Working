import {
  CalendarDays,
  User,
  Briefcase,
} from 'lucide-react';

type UserProfileProps = {
  nik: string
}

export default function UserProfile(props: UserProfileProps) {
  const { nik } = props
    return (
        <section className="bg-[#C49A0A] px-6 pb-8 pt-6">
          <div className='mx-auto max-w-6xl'>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a67f02]">
                <CalendarDays className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-semibold text-white">Jadwal Saya</h1>
                <p className="text-sm text-white/70">
                  Minggu ini · 12–17 Mei 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/20 bg-[#a67f02] text-3xl font-semibold">
                <User className='text-white' />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white">Rudi Hartono</h2>
                <p className="text-white/70">NIK: {nik}</p>
                <span className="mt-2 inline-flex items-center rounded-full bg-[#a67f02] px-4 py-1 text-sm text-white/70">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Kasir
                </span>
              </div>
            </div>
          </div>
        </section>
    )
}
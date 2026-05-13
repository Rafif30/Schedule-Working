export interface Schedules {
    date: string;
    day: string;
    session: string;
    time: string;
    location: string;
    pic: string;
    sessionColor?: string;
    today?: boolean;
    active?: boolean;
}

export interface Module {
    id: number;
    moduleName: string;
    moduleLink: string;
    grade: string | null;
}

export interface ModuleList {
  sumNotDone: number;
  sumDone: number;
  listNotDone: Module[]
  listDone: Module[]
}
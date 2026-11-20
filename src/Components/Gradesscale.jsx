import { ClipboardList } from "lucide-react";
import { memo } from "react";
const gradeBands = [
  { grade: "A+", range: "97-100%", color: "bg-emerald-100 text-emerald-800" },
  { grade: "A", range: "93-96%", color: "bg-emerald-100 text-emerald-800" },
  { grade: "A-", range: "90-92%", color: "bg-emerald-100 text-emerald-800" },
  { grade: "B+", range: "87-89%", color: "bg-blue-100 text-blue-800" },
  { grade: "B", range: "83-86%", color: "bg-blue-100 text-blue-800" },
  { grade: "B-", range: "80-82%", color: "bg-blue-100 text-blue-800" },
  { grade: "C+", range: "77-79%", color: "bg-amber-100 text-amber-800" },
  { grade: "C", range: "73-76%", color: "bg-amber-100 text-amber-800" },
  { grade: "C-", range: "70-72%", color: "bg-amber-100 text-amber-800" },
  { grade: "D+", range: "67-69%", color: "bg-orange-100 text-orange-800" },
  { grade: "D", range: "63-66%", color: "bg-orange-100 text-orange-800" },
  { grade: "D-", range: "60-62%", color: "bg-orange-100 text-orange-800" },
  { grade: "F", range: "Below 60%", color: "bg-rose-100 text-rose-800" },
];

const Gradesscale = () => {
  


  

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
          <ClipboardList className="h-5 w-5 text-amber-600" />
          Grade Scale
        </h2>
        <button
          className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
          type="button"
        >
          Switch to Simple
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
        {gradeBands.map(({ grade, range, color }) => (
          <div className={`rounded-md px-2 py-2 text-center ${color}`} key={grade}>
            <p className="text-sm font-semibold">{grade}</p>
            <p className="text-[11px]">{range}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Gradesscale);
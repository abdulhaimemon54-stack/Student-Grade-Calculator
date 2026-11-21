import { ClipboardList } from "lucide-react";
import { memo } from "react";
import { gradeBands } from "../gradeScale";

const Gradesscale = () => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
          <ClipboardList className="h-5 w-5 text-amber-600" />
          Grade Scale
        </h2>
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
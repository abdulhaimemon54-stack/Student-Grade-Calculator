import { ClipboardList } from "lucide-react";
import { memo } from "react";
import { gradeBands } from "../gradeScale";

const Gradesscale = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100">
            <ClipboardList className="h-5 w-5 text-amber-700" />
          </span>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-slate-900">Grade Scale</h2>
            <p className="text-xs text-slate-500">
              Find the letter grade for each percentage range.
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {gradeBands.length} bands
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
        {gradeBands.map(({ grade, range, color }) => (
          <div
            className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2 transition-colors hover:border-slate-300 hover:bg-white sm:px-3"
            key={grade}
          >
            <span
              className={`inline-flex min-w-10 shrink-0 items-center justify-center rounded-lg px-2 py-1.5 text-sm font-bold ${color}`}
            >
              {grade}
            </span>
            <span className="truncate text-right text-xs font-medium text-slate-600 sm:text-sm">
              {range}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Gradesscale);
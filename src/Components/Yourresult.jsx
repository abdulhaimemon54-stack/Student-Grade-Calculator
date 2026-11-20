import { ChartNoAxesCombined } from "lucide-react";
import Subjectnumber from "./YourResult/Subjectnumber";
import Percentage from "./YourResult/percentage";
import Overallaverage from "./YourResult/Overallaverage";

const Yourresult = () => {
  return (
    <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 md:min-h-88">
        <div className="mb-4 flex items-center gap-2">
          <ChartNoAxesCombined className="h-5 w-5 shrink-0 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900">Your Results</h2>
        </div>
        <Overallaverage />
        <div className="mt-3 grid grid-cols-2 items-stretch gap-3">
          <Subjectnumber />
          <Percentage />
        </div>
    </section>
  );
};

export default Yourresult;

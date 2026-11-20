import { Plus } from "lucide-react";
import Subjectname from "./AddYourResult/Subjectname";
import Markscored from "./AddYourResult/Markscored";
import Gradebtn from "./AddYourResult/Gradebtn";

const Addyourresult = () => {
  return (
    <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 md:min-h-88">
      <div className="mb-4 flex items-center gap-2">
        <Plus className="h-5 w-5 shrink-0 text-violet-600" />
        <h1 className="text-xl font-semibold text-slate-900">Add Your Grades</h1>
      </div>
      <div className="space-y-3">
        <Subjectname />
        <Markscored />
        <Gradebtn />
      </div>
    </section>
  );
};

export default Addyourresult;

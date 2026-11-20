import { useContext } from "react";
import Gradecontext from "../Context/Gradecontext";

const Markscored = () => {
  const {
    errorMarkScored,
    errorTotalMarks,
    markScored,
    setMarkScored,
    totalScored,
    setTotalScored,
  } = useContext(Gradecontext);

  const markScore = (e) => {
    setMarkScored(e.target.value);
  };

  const totalScore = (e) => {
    setTotalScored(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="min-w-0">
        <label
          className="mb-1 block text-sm font-medium text-slate-700"
          htmlFor="marks-scored"
        >
          Marks Scored
        </label>
        <input
          required
          onChange={markScore}
          value={markScored}
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          id="marks-scored"
          min="0"
          placeholder="85"
          step="any"
          type="number"
        />
        <p className="text-red-500 text-xs mt-1">{errorMarkScored}</p>
      </div>
      <div className="min-w-0">
        <label
          className="mb-1 block text-sm font-medium text-slate-700"
          htmlFor="total-marks"
        >
          Total Marks
        </label>
        <input
          required
          onChange={totalScore}
          value={totalScored}
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          id="total-marks"
          min="0"
          step="1"
          placeholder="100"
          type="number"
        />
        <p className="text-red-500 text-xs mt-1">{errorTotalMarks}</p>
      </div>
    </div>
  );
};

export default Markscored;

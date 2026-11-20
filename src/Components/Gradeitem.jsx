import { Trash2 } from "lucide-react";
import { memo } from "react";
const Gradeitem = ({ item, index, onDelete }) => {
   console.log("Gradeitem rendered:", item.subjectName);
    
    
  const percentage =
    (Number(item.markScored) / Number(item.totalScored)) * 100;

  const calculateGrade = (percentage) => {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";
    return "F";
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 px-3 py-2.5">
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-slate-800">
          {item.subjectName}
        </p>
        <p className="text-xs text-slate-500">
          {item.markScored}/{item.totalScored} marks
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-bold text-blue-700">
            {percentage.toFixed(1)}%
          </p>
          <p className="text-xs font-medium text-blue-600">
            {calculateGrade(percentage)}
          </p>
        </div>

        <button
          onClick={() => onDelete(index)}
          aria-label="Remove grade"
          className="rounded p-1 text-red-500 hover:bg-red-50"
          type="button"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default memo(Gradeitem);
import { useContext, useMemo } from "react";
import Gradecontext from "../Context/Gradecontext";
import { getLetterGrade } from "../../gradeScale";

const Overallaverage = () => {
  const { subject } = useContext(Gradecontext);

  const result = useMemo(() => {
    const totals = subject.reduce(
      (total, item) => {
        total.totalObtained += Number(item.markScored);
        total.totalMaximum += Number(item.totalScored);

        return total;
      },
      {
        totalObtained: 0,
        totalMaximum: 0,
      },
    );

    return totals;
  }, [subject]);

  let overAllPercentage = 0;

  if (result.totalMaximum !== 0) {
    overAllPercentage =
      (Number(result.totalObtained) / Number(result.totalMaximum)) * 100;
  }
  return (
    <div className="rounded-lg bg-linear-to-r from-emerald-400 to-blue-500 px-4 py-3 text-center text-white">
      <p className="text-xs font-medium">Overall Average</p>
      <p className="text-2xl font-bold">{overAllPercentage.toFixed(2)}%</p>
      <p className="text-xs font-medium">
        Grade: {getLetterGrade(overAllPercentage)}
      </p>
    </div>
  );
};

export default Overallaverage;

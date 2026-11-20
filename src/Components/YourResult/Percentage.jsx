import { useContext } from "react";
import Gradecontext from "../Context/Gradecontext";

const Percentage = () => {
  const { subject } = useContext(Gradecontext);

  if (subject.length === 0) {
    return (
      <div className="flex h-24 w-full min-w-0 flex-col items-center justify-center rounded-lg bg-green-200 p-4 text-center">
        <p className="text-2xl font-bold text-green-700">0%</p>
        <p className="text-sm font-medium text-green-600">Highest</p>
      </div>
    );
  }

  const highestSubject = subject.reduce((highest, item) => {
    const highestPercentage =
      (Number(highest.markScored) / Number(highest.totalScored)) * 100;

    const currentPercentage =
      (Number(item.markScored) / Number(item.totalScored)) * 100;

    return currentPercentage > highestPercentage ? item : highest;
  }, subject[0]);

  const highestPercentage =
    (Number(highestSubject.markScored) / Number(highestSubject.totalScored)) *
    100;

  return (
    <div className="flex h-24 w-full min-w-0 flex-col items-center justify-center rounded-lg bg-green-200 p-4 text-center">
      <p className="text-2xl font-bold text-green-700">
        {highestPercentage.toFixed(1)}%
      </p>
      <p className="text-sm font-medium text-green-600">Highest</p>
    </div>
  );
};

export default Percentage;

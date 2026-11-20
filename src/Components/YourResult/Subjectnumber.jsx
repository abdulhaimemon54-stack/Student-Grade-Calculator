import { useContext } from "react";
import Gradecontext from "../Context/Gradecontext";

const Subjectnumber = () => {

const {subject} = useContext(Gradecontext)


  return (
    <div className="flex h-24 w-full min-w-0 flex-col items-center justify-center rounded-lg bg-blue-200 p-4 text-center">
      <p className="text-2xl font-bold text-blue-700">{subject.length}</p>
      <p className="text-sm font-medium text-blue-500">Subjects</p>
    </div>
  );
};

export default Subjectnumber;

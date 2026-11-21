import { ChartNoAxesCombined,  } from "lucide-react";
import { useContext,useCallback } from "react";
import Gradecontext from "./Context/Gradecontext";
import Gradeitem from "./Gradeitem";

const Gradeslist = () => {
  
  const { subject, setSubject } = useContext(Gradecontext);

const clearAll = () => {
 setSubject([])
  
}

  const deleteGrade = useCallback((selectedIndex) => {
    setSubject((prevSubject) =>
      prevSubject.filter((item, index) => index !== selectedIndex)
    );
  }, [setSubject]);

 

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
          <ChartNoAxesCombined  className="h-5 w-5 text-emerald-600" />
          Your Grades
        </h2>
        <button onClick={
          clearAll
        }
          className="text-xs font-medium text-red-600 hover:text-red-700"
          type="button"
        >
          Clear All
        </button>
      </div>
      {subject.map((item, index) => {
       
        return<Gradeitem
      key={index}
      item={item}
      index={index}
      onDelete={deleteGrade}
    />
      })}
    </section>
  );
};

export default Gradeslist;

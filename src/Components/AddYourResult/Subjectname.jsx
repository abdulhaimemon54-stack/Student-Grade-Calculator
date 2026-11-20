import { useContext } from "react";
import Gradecontext from '../Context/Gradecontext'
const Subjectname = () => {
  
  const {subjectName, setSubjectName, errorSubject} = useContext(Gradecontext)

  const subject = (e) => {
    
setSubjectName(e.target.value);
  };

  return (
    <div>
      <label
        className="mb-1 block text-sm font-medium text-slate-700"
        htmlFor="subject-name"
      >
        Subject Name
      </label>
      <input
        required
        value={subjectName}
        onChange={subject}
        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        id="subject-name"
        placeholder="Math, Science, English..."
        type="text"
      />
      <p className="text-red-500 text-xs mt-1">{errorSubject}</p>
    </div>
  );
};

export default Subjectname;

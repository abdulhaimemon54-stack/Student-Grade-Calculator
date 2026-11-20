import { useContext } from "react";
import Gradecontext from "../Context/Gradecontext";

const Gradebtn = () => {
  const {
    subjectName,
    markScored,
    setErrorSubject,
    setErrorTotalMarks,
    setErrorMarkScored,
    totalScored,
    subject,
    setSubject,
  } = useContext(Gradecontext);
  const addGrade = () => {

setErrorSubject("");
setErrorMarkScored("");
setErrorTotalMarks("");

if (subjectName.trim() === "") {
  setErrorSubject
  ('Please Enter Subject Name')
  return
}


    if (markScored === "") {
      setErrorMarkScored("This field is required. Please Enter Mark Scored");
      return;
    }
    
   if (totalScored === "" || Number(totalScored) === 0){
      setErrorTotalMarks("This Field is Required. Please Enter Total Marks")
      return
    }
    if (Number(markScored) > Number(totalScored)) {
      setErrorMarkScored('Obtained marks cannot be greater than total marks.')
    return
  }
  
    
    const newSubject = { subjectName, totalScored, markScored };

    setSubject([...subject, newSubject]);
  };

  return (
    <button
      onClick={addGrade}
      className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.95]"
      type="button"
    >
      Add Grade
    </button>
  );
};

export default Gradebtn;

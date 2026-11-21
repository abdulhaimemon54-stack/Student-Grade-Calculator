import { useContext } from "react";
import Gradecontext from "../Context/Gradecontext";

const Gradebtn = () => {
  const {
    subjectName,
    setSubjectName,
    markScored,
    setMarkScored,
    setErrorSubject,
    setErrorTotalMarks,
    setErrorMarkScored,
    totalScored,
    setTotalScored,
    subject,
    setSubject,
  } = useContext(Gradecontext);

  const addGrade = () => {
    setErrorSubject("");
    setErrorMarkScored("");
    setErrorTotalMarks("");

    const trimmedSubjectName = subjectName.trim();
    if (trimmedSubjectName === "") {
      setErrorSubject("Please Enter Subject Name");
      return;
    }

    const obtainedMarks = Number(markScored);
    if (markScored === "" || !Number.isFinite(obtainedMarks)) {
      setErrorMarkScored("This field is required. Please Enter Mark Scored");
      return;
    }

    if (obtainedMarks < 0) {
      setErrorMarkScored("Marks scored cannot be negative.");
      return;
    }

    const maximumMarks = Number(totalScored);
    if (
      totalScored === "" ||
      !Number.isFinite(maximumMarks) ||
      maximumMarks <= 0
    ) {
      setErrorTotalMarks("Total marks must be greater than 0.");
      return;
    }

    if (!Number.isInteger(maximumMarks)) {
      setErrorTotalMarks("Total marks must be a whole number.");
      return;
    }

    if (obtainedMarks > maximumMarks) {
      setErrorMarkScored("Obtained marks cannot be greater than total marks.");
      return;
    }

    const newSubject = {
      subjectName: trimmedSubjectName,
      totalScored: maximumMarks,
      markScored: obtainedMarks,
    };

    setSubject([...subject, newSubject]);
    setSubjectName("");
    setMarkScored("");
    setTotalScored("");
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

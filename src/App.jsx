import Addyourresult from "./Components/Addyourresult";
import Gradesscale from "./Components/Gradesscale";
import Gradeslist from "./Components/Gradeslist";
import Yourresult from "./Components/Yourresult";
import { useEffect, useState } from "react";
import Gradecontext from "./Components/Context/Gradecontext";

const App = () => {
  const [subject, setSubject] = useState(() => {
    const savedSubjects = localStorage.getItem("subjects");
    return savedSubjects
      ? JSON.parse(savedSubjects).map((savedSubject) => {
          const { obtainedMarks: legacyTotalScored, ...subject } = savedSubject;
          return {
            ...subject,
            totalScored: subject.totalScored ?? legacyTotalScored,
          };
        })
      : [];
  });
  const [subjectName, setSubjectName] = useState("");
  const [markScored, setMarkScored] = useState("");
  const [totalScored, setTotalScored] = useState("");
  const [errorSubject, setErrorSubject] = useState("");
  const [errorMarkScored, setErrorMarkScored] = useState("");
  const [errorTotalMarks, setErrorTotalMarks] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subject));
  }, [subject]);


  return (
    <Gradecontext.Provider
      value={{
        errorSubject,
        setErrorSubject,
        errorMarkScored,
        setErrorMarkScored,
        errorTotalMarks,
        setErrorTotalMarks,
        error,
        setError,
        subject,
        setSubject,
        subjectName,
        setSubjectName,
        markScored,
        setMarkScored,
        totalScored,
        setTotalScored,
      }}
    >
      <main className="min-h-screen bg-slate-50 px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Addyourresult />
            <Yourresult />
          </div>
          <Gradeslist />
          <Gradesscale />
        </div>
      </main>
 
    </Gradecontext.Provider>
  );
};

export default App;

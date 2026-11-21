export const gradeBands = [
  {
    grade: "A+",
    range: "97-100%",
    minimum: 97,
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    grade: "A",
    range: "93-96%",
    minimum: 93,
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    grade: "A-",
    range: "90-92%",
    minimum: 90,
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    grade: "B+",
    range: "87-89%",
    minimum: 87,
    color: "bg-blue-100 text-blue-800",
  },
  {
    grade: "B",
    range: "83-86%",
    minimum: 83,
    color: "bg-blue-100 text-blue-800",
  },
  {
    grade: "B-",
    range: "80-82%",
    minimum: 80,
    color: "bg-blue-100 text-blue-800",
  },
  {
    grade: "C+",
    range: "77-79%",
    minimum: 77,
    color: "bg-amber-100 text-amber-800",
  },
  {
    grade: "C",
    range: "73-76%",
    minimum: 73,
    color: "bg-amber-100 text-amber-800",
  },
  {
    grade: "C-",
    range: "70-72%",
    minimum: 70,
    color: "bg-amber-100 text-amber-800",
  },
  {
    grade: "D+",
    range: "67-69%",
    minimum: 67,
    color: "bg-orange-100 text-orange-800",
  },
  {
    grade: "D",
    range: "63-66%",
    minimum: 63,
    color: "bg-orange-100 text-orange-800",
  },
  {
    grade: "D-",
    range: "60-62%",
    minimum: 60,
    color: "bg-orange-100 text-orange-800",
  },
  {
    grade: "F",
    range: "Below 60%",
    minimum: 0,
    color: "bg-rose-100 text-rose-800",
  },
];

export const getLetterGrade = (percentage) => {
  for (const band of gradeBands) {
    if (percentage >= band.minimum) return band.grade;
  }

  return "F";
};

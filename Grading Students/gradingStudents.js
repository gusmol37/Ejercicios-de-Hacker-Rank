const roundGrade = (grade) => {
    const next5 = 5 * Math.ceil (grade / 5)
    return (grade < 38) ? grade : (next5 - grade < 3) ? next5 : grade
  }
  
  const gradingStudents = (grades) =>
    grades .map (roundGrade)
  
  console .log (gradingStudents ([73, 67, 38, 33]))
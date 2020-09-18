const organizeInstructors = function(instructors) {
  let resultObject = {};

  for (let instructor of instructors) {
    resultObject[instructor.course] = [];

  }

  for (let instructor of instructors) {
    resultObject[instructor.course].push(instructor.name);

  }
  return resultObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
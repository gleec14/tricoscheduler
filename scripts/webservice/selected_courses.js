var selectedCourses = [];

var addCourse = function(course) {
  // @TODO: remove this chunk when using a database. Use the course id in
  // database insted.
  var schoolId = getSchoolId(course.Campus);  
  var newCourse = schoolId + '_' + course.CRN;
  selectedCourses.push(newCourse);
}

var removeCourse = function(course) {
  var courseId = getSchoolId() + '_' + course.CRN;
  var index = selectedCourses.indexOf(courseId);
  selectedCourses.splice(index, 1);
}

var getSchoolId = function(school) {
  var schoolId;
  switch (school) {
    case 'Swarthmore':
      schoolId = 1;
      break;
    case 'Haverford':
      schoolId = 2;
      break;
    case 'Bryn_Mawr':
      schoolId: 3;
      break;
  }

  return schoolId;
}

var getSelectedCourses = function() {
  return selectedCourses;
}
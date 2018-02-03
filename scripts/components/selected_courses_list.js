/**
 * Add a course to the list of selected courses.
 * 
 * @param {*} course
 *   The course to add.
 */
var addCourse = function(course) {
  $('<li/>', {
    'id': course.Campus.toLowerCase() + '_' + course.CRN,
    'text': course['Registration ID'] + ' - ' + course['Course Title'],
  }).appendTo('#selected-courses ul');

  updateCourseList();
}

/**
 * Remove a course from the list of selected courses.
 * 
 * @param {*} course
 *   The course to add.
 */
var removeCourse = function(course) {
  $('li#' + course.Campus.toLowerCase() + '_' + course.CRN).remove();

  updateCourseList();
}

/**
 * Update the selected course list display.
 */
var updateCourseList = function() {
  if ($('#selected-courses ul').children().length > 0) {
    $('#selected-courses .selected-classes').removeClass('hidden');
    $('#selected-courses .no-selected-classes').addClass('hidden');
  } else {
    $('#selected-courses .selected-classes').addClass('hidden');
    $('#selected-courses .no-selected-classes').removeClass('hidden');
  }
}
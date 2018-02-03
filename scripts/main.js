$(document).on('ready', function() {
  console.log('h');
  $('#btn-generator').on('click', function() {
    console.log("helo");
    /*WebService.getSchedule(getSelectedCourses(), function(data) {
      console.log(data);
    })*/
  });

});

$('#selected-courses').on('click', '#btn-generator', function() {
  console.log("helo");
  /*WebService.getSchedule(getSelectedCourses(), function(data) {
    console.log(data);
  })*/
});

var submitCourses = function() {
  WebService.getSchedule(getSelectedCourses(), function(data) {
    console.log(data);
  });
};
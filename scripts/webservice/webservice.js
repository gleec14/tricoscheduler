(function(){
/*global $*/
var WebService = function(){
  
  /**
   * Gets available vacancies.
   */ 
  var schedule = function(courses){
    $.ajax({
      url: $SERVER + '/schedule',
      data: {
        'courses': courses.join(),
      },
      success: function(data) {
        return data;
      },
    });
  }
  
  return {
    getSchedule: schedule,
  }
}

window.WebService = new WebService();
  
}());

  
(function() {
  var baseUrl = 'http://localhost:3000/api/v1';
  $.ajax({
    url: baseUrl + '/get/topic/list',
    type: 'GET',
    data: {
      page: 1,
      per: 10
    },
    success: function(res) {
      console.log('success: ', res)
    },
    error: function(res) {
      console.log(res)
    }
  })
})(jQuery);
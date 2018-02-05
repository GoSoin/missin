(function() {
  var baseUrl = 'http://localhost:3000/api/v1';
  /** 获取话题列表 **/
  $.ajax({
    url: baseUrl + '/get/topic/list',
    type: 'GET',
    data: {
      page: 1,
      per: 10
    },
    success: function(res) {
      if(typeof res === 'string') {
        res = JSON.parse(res)
      }
      if(res.status === 200 && res.code === 200) {
        var data = res.data,
            str = ''
        for(var i = 0; i < data.length; i++) {
          str += '<div>' + data[i].nickname + ' ' + data[i].avatar + ' ' + data[i].title + ' ' + data[i].content + '</div>'
        }
        $('#topic-list').html(str)
      }
    },
    error: function(res) {
      console.log(res.message)
    }
  })

  /** 话题提交 **/
  $('#cast-topic').on('click', function() {
    var content = $('#topic-input').val()
    $.ajax({
      url: baseUrl + '/save/topic',
      type: 'POST',
      data: {
        nickname: getTopicCon(content).topic,
        title: getTopicCon(content).topic,
        content: getTopicCon(content).content
      },
      success: function(res) {
        
      },
      error: function(res) {
        console.log(res)
      }
    })
  })

  /** 监听输入 **/
  $('#topic-input').on('focus', function() {
    $(this).val('#话题#')
  })

  function getTopicCon(str) {
    var _str = str.trim();
    if (_str.indexOf('#') == 0) {
      var _2 = _str.substring(1, _str.length).indexOf('#');
      if (_2 > -1) {
        return {
          topic: _str.substring(1, _2 + 1),
          content: _str.substring(_2 + 2, _str.length)
        }
      }
    }
    return {
      topic: '',
      content: _str
    }
  }
})(jQuery);
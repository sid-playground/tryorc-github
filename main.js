(function ($) {

  var username = null;
  var password = null;
  var reponame = null;
  var filepath = null;
  var github = null;
  var repo = null;
	
  var initialize_members = function() {
    chrome.extension.sendRequest({method: "getLocalStorage", key: "username"}, function(response) {
      console.log(response.data);
      if (!response.data)
        return;
      username = response.data;
      
      chrome.extension.sendRequest({method: "getLocalStorage", key: "password"}, function(response) {
          console.log(response.data);
          if (!response.data)
          return;
          password = response.data;
          chrome.extension.sendRequest({method: "getLocalStorage", key: "reponame"}, function(response) {
            console.log(response.data);
            if (!response.data)
            return;
            reponame = response.data;
            chrome.extension.sendRequest({method: "getLocalStorage", key: "filepath"}, function(response) {
              console.log(response.data);
              if (!response.data)
              return;
              filepath = response.data;
              console.log(username); console.log(password); console.log(reponame);
              github = new Github({
                "username": username,
                     "password": password,
                     "auth": "basic"
              });

              console.log(github);
              repo = github.getRepo(username, reponame);
              console.log(repo);

            });

          });

      });

    });
  }

  var getCodeContent = function() {
    var bodyElementHtml = $('iframe').contents().find('body[class=editbox]').html();
    bodyElementHtml = '<pre>' + bodyElementHtml + '</pre>';
    console.log(bodyElementHtml);
    $('iframe').contents().find('body[class=editbox]').html(bodyElementHtml);
    return window.frames[0].document.body.innerText;
  }

  var setCodeContent = function(code) {
    window.frames[0].document.body.innerText = code;
  }

  var commit = function() {
    console.log(getCodeContent());
    
    repo.write('master', filepath, getCodeContent(), 'api commit', function(err) {
      console.log(err);
      alert('done!');
    });
  }

  var load = function() {
    repo.read('master', filepath, function(err, data) {
      setCodeContent(data);
    });
  }

  var createButton = function(text) {
    var button = $('<button>' + text + '</button>');
    return button;
  }

  $(document).ready(function() {
    initialize_members();
    var btn_commit = createButton('Commit');
    var btn_load = createButton('Load');
    btn_commit.click(commit);
    btn_load.click(load);
    var orc_wrapper = $('.orc-wrapper');
    console.log(orc_wrapper);
    btn_commit.appendTo(orc_wrapper);
    btn_load.appendTo(orc_wrapper);
  });

})(jQuery);

(function ($) {
	
  var commit = function() {
   var username = "sid-playground";

    var password = "drowssap1";
    var reponame = "test";
    var github = new Github({
      username: username,
        password: password,
        auth: "basic"
    });
    var repo = github.getRepo(username, reponame);
    console.log(repo);
    repo.write('master', 'test_file', 'updated readme. Time: ' + (new Date().getTime()).toString(), 'api commit', function(err) {
      console.log(err);
      alert('done!');
    });
  }

  var createButton = function() {
    var button = $('<button action="commit()">Github</button>');
    return button;
  }

  $(document).ready(function() {
    var btn_github = createButton();
    btn_github.click(commit);
    var orc_wrapper = $('.orc-wrapper');
    console.log(orc_wrapper);
    btn_github.appendTo(orc_wrapper);

   var username = "sid-playground";

    var password = "drowssap1";
    var reponame = "test";
    var github = new Github({
      username: username,
        password: password,
        auth: "basic"
    });
    var repo = github.getRepo(username, reponame);
    console.log(repo);
    repo.write('master', 'test_file', 'updated readme. Time: ' + (new Date().getTime()).toString(), 'api commit', function(err) {
      console.log(err);
      alert('done!');
    });

  });

})(jQuery);

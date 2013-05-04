// Saves options to localStorage.
function save_options() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var reponame = document.getElementById("reponame").value;
  var filepath = document.getElementById("filepath").value;

  console.log(username); console.log(password); console.log(reponame); console.log(filepath);
  
  localStorage["username"] = username;
  localStorage["password"] = password;
  localStorage["reponame"] = reponame;
  localStorage["filepath"] = filepath;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var username = localStorage["username"];
  var reponame = localStorage["reponame"];
  var password = localStorage["password"];
  var filepath = localStorage["filepath"];
  
  if (!username || !reponame || !password || !filepath)
    return;

  document.getElementById("username").value = username;
  document.getElementById("password").value = password;
  document.getElementById("reponame").value = reponame;
  document.getElementById("filepath").value = filepath;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);

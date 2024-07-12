function showHint(str) {
    var xhttp;
    if (str.length == 0) { 
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://reqres.in/api/users?page=2?q="+str, true);
    xhttp.send();   
  }

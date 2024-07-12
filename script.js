function getData() {
    var employeeName = document.getElementById("employeeName").value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            

            displayData(responseData);
        }
    };

    xhttp.open("GET", "https://lowcodemindsdemo.appiancloud.com/database/index.php?route=/table/search&db=Appian&table=?employeeName" + encodeURIComponent(employeeName), true);
    xhttp.send();
}

function displayData(data) {
    var employeeData = document.getElementById("aa_employeedetail");
    if (data && data.length > 0) {
        var aa_employeedetail = data[0]; 
        employeeData.innerHTML = "Name: " +  aa_employeedetail.employeeName + "<br>";
        employeeData.innerHTML += "Age: " + aa_employeedetail.employeeEmailId + "<br>";
    } else {
        employeeData.innerHTML = "No data found for the specified employee.";
    }
}

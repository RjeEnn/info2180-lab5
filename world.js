function search(isCity) {
    var httpRequest = new XMLHttpRequest();
    var resultSec = document.getElementById("result");
    var input = document.getElementById("country");
    var quer = input.value;
    var url = '';
    
    if(isCity == true) {
        url = `http://localhost/info2180-lab5/world.php?context=city&country=${quer}`;
    } else {
        url = `http://localhost/info2180-lab5/world.php?context=country&country=${quer}`;
    }
    
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                resultSec.innerHTML = httpRequest.response;
            }
        }
    };
    
    httpRequest.open('GET', url);
    httpRequest.send();
}

document.addEventListener('DOMContentLoaded', function() {
    var searchBtn = document.getElementById("lookup");
    var searchBtnCity = document.getElementById("lookupCity");

    var isCity = true;

    searchBtn.onclick = function(event) {
        search(!isCity);
    };
    searchBtnCity.onclick = function(event) {
        search(isCity);
    };
})
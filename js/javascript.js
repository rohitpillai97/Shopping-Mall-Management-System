function goToProperPage() {
    var url;
    var location = document.getElementById("my-dropdown").selectedIndex;
    if (location == 1) {
        url="adminoption.html";
    }
   else if (location == 2) {
        url="shopowner.html";
    }

    else if (location == 3) {
        url="customeroptions.html";      
    }
    window.location.href=url;
}







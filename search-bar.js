// Search Functionality
    // TODO - Make window.location JAM into a variable based on page location 
    // Need to check whether the above is possible via OSAPI, if not window.location parse
    var input = "";

    $("#formSubmit").submit((event) => {
        input = document.getElementById("search-bar").value;
        window.location = `https://jamsalesdemo2.sapjam.com/home/HdMS3x7G8gxWkQLJrHOijE?%24searchText=${input}`;
        $("#formSubmit")[0].reset();
    });
    
    
    $("#searchIcon").click(() => {
        input = document.getElementById("search-bar").value;
        window.location = `https://jamsalesdemo2.sapjam.com/home/HdMS3x7G8gxWkQLJrHOijE?%24searchText=${input}`;
    });
    
    $("#searchButton").click(() => {
        input = document.getElementById("search-bar").value;
        window.location = `https://jamsalesdemo2.sapjam.com/home/HdMS3x7G8gxWkQLJrHOijE?%24searchText=${input}`;
    });
        
    (function getUserID() {
            document.getElementById('search-bar').placeholder="Hi " +  jamApp.currentUser.attributes.FirstName + ", search the catalog?";
    })();
        
    var prefs = new gadgets.Prefs();
    gadgets.window.adjustHeight();

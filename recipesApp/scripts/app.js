var app = app || {};

(function() {
    
    document.addEventListener("deviceready", function() {
        //app.servicesBaseUrl = "http://localhost:62354/api/";
        var history= window.localStorage.getItem("history");
        if(history===null){
            var logs=[];
            window.localStorage.setItem("history", JSON.stringify(logs));
        }
        
        var kendoApp = new kendo.mobile.Application(document.body);
    });    
}());
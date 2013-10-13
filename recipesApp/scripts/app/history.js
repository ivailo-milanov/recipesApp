var app = app || {};

(function(a) {
    function showHistory(){
        
         var history = window.localStorage.getItem("history");
        
        var listElement = $('#history');
        
        var htmlToAdd = "";
        
        var parsedHistory = jQuery.parseJSON(history);
        
        parsedHistory.forEach(function(log) {
            if(log!="")
            {
                htmlToAdd = htmlToAdd+"<a class='item' style='font-size:20px; margin:15px;' data-name='"+log+"' data-bind='events: {click: alertFunction}'>" + log + "</a></br></br>"
            }
        });
        
        listElement.html(htmlToAdd);
    }
    
    function getCurrent(){
        var area = $("#rec").val(); 
        var ingrid = area.toString();
        var testDiv = $("#result");
        if (!checkConnection.check()) {
            navigator.notification.alert("Please connect to internet!", function() {
            })
        }
        else {
            httpRequest.getJSON(ingrid)
            .then(function(data) {
                var stringy = JSON.stringify(data.results);
                window.localStorage.setItem("data", data);
                var obj = jQuery.parseJSON(stringy);
                var htmly = "<a href='http://allrecipes.com/Recipe/'>";
                obj.forEach(function(each) {
                    var testy = JSON.stringify(each);
                    var obj = jQuery.parseJSON(testy);
                    var link = "<a href=" + each.href + ">" + each.title + "</br><img src='" + each.thumbnail + "'/>" + "</a>";
                    htmly = htmly + link + "</br></br>";
                });
                testDiv.html(htmly);
            });
        }
    }
    
    function alertFunction(event){
        var recipe = $(event.target).attr("data-name");
        var textArea = $("#rec");
        textArea.html(recipe.toString());
    }
    
    function clearHistory()
    {
        var listElement = $('#history');
        listElement.html("");
        window.localStorage.clear();
    }
     var viewModel = kendo.observable({
        clearHistory:clearHistory,
         alertFunction:alertFunction,
         getCurrent:getCurrent
    });
    function init(e) {
        showHistory();
        kendo.bind(e.view.element, viewModel);
    }   
    
    a.history = {
        init:init          
    };
}(app));
var app = app || {};

(function(a) {
    function getRecipe() {
        
        var area = $("#inputText").val();
        var ingrid = area.toString();
        var testDiv = $("#results");
        
        httpRequest.getJSON(ingrid)
        .then(function(data) {
            var stringy = JSON.stringify(data.results);
            window.localStorage.setItem("data", data);
            var obj = jQuery.parseJSON(stringy);
            var htmly = "<a href='http://allrecipes.com/Recipe/'>";
            obj.forEach(function(each){
                var testy=JSON.stringify(each);
                var obj=jQuery.parseJSON(testy);
                var link="<a href="+each.href+">"+each.title+"</br><img src='"+each.thumbnail+"'/>"+"</a>";
                htmly=htmly+link+"</br></br>";
            });
            testDiv.html(htmly);
        });
    }
    
      function returnFll(data) {
        
            var testDiv = $("#results");
            var obj = jQuery.parseJSON(data);
            var htmly = "<a href='http://allrecipes.com/Recipe/'>";
            obj.forEach(function(each){
                var testy=JSON.stringify(each);
                var obj=jQuery.parseJSON(testy);
                var link="<a href="+each.href+">"+each.title+"</br><img src='"+each.thumbnail+"'/>"+"</a>";
                htmly=htmly+link+"</br></br>";
            });
            testDiv.html(htmly);
        
    }
    
    function addField(){
        var container = document.getElementById("fields");
        var newInput = document.createElement("input");
        container.appendChild(newInput);
    }
    
    var viewModel=kendo.observable({
       getRecipe:getRecipe,
        addField:addField
    });
    
    function init(e) {
      var value = window.localStorage.getItem("data");
        if(value!=null){
            returnRecipe(value);
        }
        kendo.bind(e.view.element,viewModel);
    }   
    
    a.result = {
        init:init          
    };
}(app));
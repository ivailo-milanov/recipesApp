window.httpRequest = (function(){
    function getJSON(recipes){
        var promise = new RSVP.Promise(function(resolve, reject){
            $.ajax({
                url:"http://www.recipepuppy.com/api/?i="+recipes,
                type:"GET",
                dataType:"json",
                contentType:"application/json",
                timeout:5000,
                success:function(data){
                    resolve(data);
                },
                error:function(err){
                    reject(err);
                }
            });
        });
        return promise;
    }
    
    return {
        getJSON:getJSON
    };    
}());
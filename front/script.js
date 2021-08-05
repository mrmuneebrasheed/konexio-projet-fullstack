function getAllCountries(){
    ${".btnShowData"}.click(function(){
        $.ajax({
            url:"http://localhost:8000/",
            success: function(data, status, response){
console.log(data);
            }
        })
    })
}
function fun(){
    var name=document.getElementById('name');
    var callingCodes=document.getElementById('callingCode');
    var capital=document.getElementById('capital');
    var region=document.getElementById('region');
    var subregion=document.getElementById('subregion');
    var population=document.getElementById('population');
    var area=document.getElementById('area');
    var nativeName=document.getElementById('nativeName');
    var numericCode=document.getElementById('numericcode');
    var result=document.getElementById('input1').value;
    $.ajax({         
        url:'https://restcountries.eu/rest/v2/name/'+result+'?fullText=true',
        type:"GET",
        dataType:'JSON',
        success:function(response){
            document.write("Country name is"+" "+response[0].name);
            document.write("<br>");
            document.write("Calling Code is"+" "+response[0].callingCodes);
            document.write("<br>");
            document.write("Capital is"+" "+response[0].capital);
            document.write("<br>");
            document.write("Region is"+" "+response[0].region);
            document.write("<br>");
            document.write("Subregion is"+" "+response[0].subregion);
            document.write("<br>");
            document.write("Popoulation is"+" "+response[0].population);
            document.write("<br>");
            document.write("Area is"+" "+response[0].area);
           
            document.write("<br>");
            document.write("Native Name is "+" "+response[0].nativeName);
            document.write("<br>");
            document.write("Numeric Code is"+" "+response[0].numericCode);
         
                  
        }
            });
                    
}   
            
     
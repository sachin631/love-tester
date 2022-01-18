function sachin(){
    var n=Math.random();
     n=n*101;
    n=Math.floor(n);
    if(n>=50){

        document.getElementById("condition").innerHTML=" congratulations..you love so much";
    }
    else{
        document.getElementById("condition").innerHTML="you need to do more love";
    }
   
    
    document.getElementById("percentage").innerHTML=n+"%";
   var male= document.getElementById("male").value;
   document.getElementById("first_name").innerHTML=male;
   var female= document.getElementById("female").value;
    document.getElementById("second_name").innerHTML=female;
    document.getElementById("firstnameatp").innerHTML=male;
    document.getElementById("secondnameatp").innerHTML=female;


    


}
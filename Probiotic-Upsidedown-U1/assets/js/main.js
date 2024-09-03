$( document ).ready(function() {

$('#sitefooter img').css("filter", "invert(10%) sepia(0%) saturate(0%) hue-rotate(130deg) brightness(100%) contrast(1000%)");
    
        if (document.getElementById("countdown").innerHTML == "10 MINS 00 SECS"){
            var timeleft = 60 * 10;
            
            
            
            var downloadTimer = setInterval(function function1(){
                var timer = timeleft, minutes, seconds;
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                document.getElementById("countdown").innerHTML = "<span class='blk-time blk-01'>" + minutes + "</span>" + " MINS " + "<span class='blk-time blk-01'>" + seconds + "</span>" + " SECS " ;
        				
                timeleft -= 1;
                $(".timeleft").css("visibility", "visible");
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    document.getElementById("countdown").innerHTML = "<span class='lost'>You‘ve lost your place in line & discount has expired. <a href=''>Click here</a> to see if more inventory is still available for you today.</span>"
                }
            }, 1000);
    
            console.log(countdown);
        }
    });

    $( document ).ready(function() {
    
        if (document.getElementById("countdown-02").innerHTML == "10 MINS 00 SECS"){
            var timeleft = 60 * 10;
            
            
            
            var downloadTimer = setInterval(function function1(){
                var timer = timeleft, minutes, seconds;
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                document.getElementById("countdown-02").innerHTML = "<span class='blk-time blk-01'>" + minutes + "</span>" + " MINS " + "<span class='blk-time blk-01'>" + seconds + "</span>" + " SECS " ;
        				
                timeleft -= 1;
                $(".timeleft").css("visibility", "visible");
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    document.getElementById("countdown-02").innerHTML = "<span class='lost'>You‘ve lost your place in line & discount has expired. <a href=''>Click here</a> to see if more inventory is still available for you today.</span>"
                }
            }, 1000);
    
            console.log(countdown);
        }
    });

    $( document ).ready(function() {
    
        if (document.getElementById("countdown-03").innerHTML == "10 MINS 00 SECS"){
            var timeleft = 60 * 10;
            
            
            
            var downloadTimer = setInterval(function function1(){
                var timer = timeleft, minutes, seconds;
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                document.getElementById("countdown-03").innerHTML = "<span class='blk-time blk-01'>" + minutes + "</span>" + " MINS " + "<span class='blk-time blk-01'>" + seconds + "</span>" + " SECS " ;
        				
                timeleft -= 1;
                $(".timeleft").css("visibility", "visible");
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    document.getElementById("countdown-03").innerHTML = "<span class='lost'>You‘ve lost your place in line & discount has expired. <a href=''>Click here</a> to see if more inventory is still available for you today.</span>"
                }
            }, 1000);
    
            console.log(countdown);
        }



  
 
  
  
   
});
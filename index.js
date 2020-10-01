console.log("M");
var fetchSubmit = document.getElementById("Submit");
var fetchInput = document.querySelector(".Input");
var RandomNumber ;
var ActualNumber = 0;
var chances = 3;

fetchSubmit.addEventListener("click", function(extraInfo)
{   
    extraInfo.preventDefault();
        if(chances>0)
        {
            console.log("no refresh");
        var Value = fetchInput.value; 
        console.log(Value);
        // fetchInput.reset
       
        var answer =   IntnumberGenerator(9);
        
        // console.log(answer);

       if(answer==Value)
       {
           console.log("congratulations number matched!!");
       }
       else{
           console.log("failed");
            chances--;
            console.log("Number of chances avaliable ",chances );
        }
    
        }
        else if (chances==0)
        {
            console.log("sorry restart the game");
            var ask ="Do you want to restart the game?"
            console.log(ask);
            var takIn = prompt();
            if (takIn=='yes')
            {
                location.reload();
            }
        }

         
        
    
});

function IntnumberGenerator(max)
{
    return Math.floor(Math.random()*Math.floor(max));
    
}



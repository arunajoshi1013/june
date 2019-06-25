$(document).ready(function() {
  $("form#ping").submit(function(event) {
    event.preventDefault();
    var num = $("#number").val();
    var arr=[];

          //  for(var i=1; i<=num; i++)
          //
            //  if(i % 3 === 0)username

              //{
              // arr.push("ping");

              //  }
        //     if(i % 5 === 0)
      //         {
    //        arr.push("pong");
  //              }
//
             //if(i % //15 === 0)
                 {//
            //arr.push("pingpong");
              ///   }
            //     else
          //       {
        //           arr.push(i);
      //           }
    //        }
  //console.log(arr);
//  $("#result").html(" "+arr+"<br/>");



for (var x=1; x <= 100; x++)
{
    if( x % 3 && x % 5 )
     {
        document.write(x);
       }
    else
      {
        if( x % 3 == 0 )
        {
            document.write("ping");
        }
        if( x % 5 == 0 )
        {
            document.write("pong");
        }
    }
  }

  });
});

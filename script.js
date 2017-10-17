    $(document).ready(function(){

      $("#main").mousemove(function(){

        $val=event.clientX -185;

        if($val <= 995 && $val>= 0)
        {
          $("#separator").css("#left", $val);

          $("#frame").css("width", 1000-$val);
          
        }
      });
    });

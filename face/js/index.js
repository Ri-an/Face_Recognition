
$(document).ready(function() {
    $('.dc-morph-btns li').on('click', function() {
      $('.dc-morph-btns li').removeClass("selected");
      $(this).toggleClass("selected"); 
    });

    $('.dc-morph-btns li').on('click', function() {
      var python = require("python-shell")
      var path = require("path")
            
      var option = {
        scriptPath : path.join(__dirname,"RECOG#CV2"),
        //pythonPath : 'C:\Users\DELL\AppData\Local\Programs\Python\Python37'
      }

       python.PythonShell.run("faces1.py",option,function(err,results){
         if(err) throw err;
         swal(results[0]);
       });
    });

});
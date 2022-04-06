   // jQuery methods go here...
    $(".btn").click(function() {
        var img = "";
        var imgF = [ "./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg", "./5.jpg", "./6.jpg", "./7.jpg", "./8.jpg", "./9.jpg"  ]
        for( var i = 0; i < imgF.length; i++ ) {
           img += `<div class="col-md-3"><img class="img-thumbnail" src=${imgF[i]}></div>`;
        }
        $(".row").append(img)
        
    
    });
  
 


var inreview = document.getElementById("input_review");
var reviewbox = document.getElementById("reviewbox");
var reviewbtn = document.getElementById("reviewbtn");

function newreview(){
    if(inreview.value){
        var time = new Date();
        var review_time = document.createElement("div")
        review_time.innerHTML = time.getFullYear() + "-" + (time.getMonth()+1) + "-" + time.getDate();
        review_time.setAttribute("style","color:white; font-size: 14px;height:14px; text-align:left;");
        reviewbox.appendChild(review_time);

        var difline = inreview.value.split('\n');
        for(var i=0;i<difline.length;i++){
            var review = document.createElement("div");
            review.innerHTML = difline[i];
            review.setAttribute("style","color:white; font-size: 20px;height:20px; text-align:left;");
            reviewbox.appendChild(review);
              
        }        
        inreview.value = "";
        var splitline = document.createElement("div");
        splitline.setAttribute("style","background-color:cornflowerblue; height:3px;")
        reviewbox.appendChild(splitline);
    }


}


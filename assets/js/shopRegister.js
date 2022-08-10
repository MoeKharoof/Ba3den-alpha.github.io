var imagediv = document.getElementById("img-adder");
var i = 0;
function addImage()
{
    //check if image is there then apply the logic
    imagediv.innerHTML += "<div class=\"row row-cols-lg-auto imagediv align-items-center\" id = \"imagediv"+i+"\">"+"<div class=\"form-group col-md-8\"><input type=\"file\" class=\"form-control\" id=\"img"+i+"\" name=\"img"+i+"\" accept=\"image\"></div><div class=\"form-group col-md-4\"><button type=\"button\" class=\"btn btn-danger\" onclick=\"removeImage("+i+")\">Remove Image</button></div></div>"
    i++;
}
function removeImage(x)
{
    var child2kill = document.getElementById("imagediv"+x);
    child2kill.remove();
}



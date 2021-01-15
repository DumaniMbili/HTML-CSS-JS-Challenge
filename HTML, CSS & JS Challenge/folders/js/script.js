//this is to comment on the incremention and decremention of the modal. 

//the attribute will be set
document.querySelector(".btn-minus").setAttribute("disabled", "disabled"); 

//variables initialised
var valueCount

//funtion created to increment the colour that has been picked ("+")
document.querySelector(".btn-plus").addEventListener("click", function() {

    valueCount = document.getElementById("col-lg-2 pt-2").value; 
    valueCount++;

    document.getElementById("col-lg-2 pt-2").value = valueCount

    if(valueCount > 0)
    {
        document.querySelector(".btn-minus").removeAttribute("disabled");
        document.querySelector(".btn-minus").classList.remove("disabled");
    }
})

//function to decrement the colour that has been picked ("-")
document.querySelector(".btn-minus").addEventListener("click", function() {

    valueCount = document.getElementById("col-lg-2 pt-2").value; 
    valueCount--;

    document.getElementById("col-lg-2 pt-2").value = valueCount

    if(valueCount == 0)
    {
        document.querySelector(".btn-minus").setAttribute("disabled", "disabled")
    }
})

//funtionality of the cancel button
$('#btn-danger').click(function(){
    if (unsaved)
    {
        var flag = confirm("Are you sure you want to cancel?");
        if (flag)
        {
            $('#modal').modal('hide');

        }
        else
        $('#modal').modal('hide');
    }
});


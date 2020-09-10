window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    heightObj = document.getElementById('txtHeight');
    widthObj = document.getElementById('txtWidth');
	costObj = document.getElementById('tdCost')
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalcCost').onclick = calcCost;
}
function resetInputs() {
    lengthObj.value = '';
    heightObj.value = '';
    widthObj.value = '';
	costObj.innerHTML = '';
}
function calcCost() {
    var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
    costObj.innerHTML = '';
    if(isNaN(length) || isNaN(height) || isNaN(width)) {
        alert('Invalid length or height');
        return;
	}
    var glassCost=(((length*width*2)+(width*height*2)+(length*height*2))*0.06);
	var glueCost=((height*4)+(length*2)+(width*2))*0.1; 
	var labour=(60/6000)*((height*4)+(length*2)+(width*2));
    var GST=(glassCost+glueCost+labour)*0.1;
    costObj.innerHTML = glassCost+glueCost+labour+GST;
}

window.onload=function() {
                lengthObj = document.getElementById('txtLength');
                girthObj = document.getElementById('txtGirth');
                weightObj = document.getElementById('tdWeight');
                document.getElementById('btnReset').onclick = resetInputs;
                document.getElementById('btnCalc').onclick = calcWeight;
}
            function resetInputs() {
                lengthObj.value = '';
                girthObj.value = '';
                weightObj.innerHTML = '';
}
            function calcWeight() {
                var length = new Number(lengthObj.value);
                var girth = new Number(girthObj.value);
                weightObj.innerHTML = '';
                if(isNaN(length) || isNaN(girth)) {
                    alert('Invalid length or girth');
                    return;
                }
                weightObj.innerHTML = length*Math.pow(girth,2)/800;
}
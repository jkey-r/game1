
var sum;
var t;
var t2;
window.onload = function (){
	sum = Number(document.getElementById("sum").innerHTML) ;
	t = Number(document.getElementById("t").innerHTML) ;
	t2 = t;
	
	var	first_rtn = document.getElementById("first-submit");
	var	second_rtn = document.getElementById("second-submit");
	
	
	first_rtn.onclick = function () {
		var first = document.getElementById("first");
		var first_text = document.getElementById("first-text")
		first_text.style.display = "none";
		if (inputNumber(first)) {
			ds("第一个人",Number(first.value));
			first_rtn.style.display = "none";
			second_rtn.style.display = "inline";
			first.value = "";	
		} else{
			first_text.style.display = "inline";
			first.value = "";
		}
	}
	second_rtn.onclick = function(){
		var second = document.getElementById("second");
		var second_text = document.getElementById("second-text");
		second_text.style.display = "none";
		if (inputNumber(second)) {
			ds("第二个人",Number(second.value));
			second_rtn.style.display = "none";
			first_rtn.style.display = "inline";
			second.value="";
		} else{
			second_text.style.display = "inline";
			second.value="";
		}
		
	}
	
}

function ds(key,i){
	
	var sumid = document.getElementById("sum");
	var tid = document.getElementById("t");
	
	if(sum>0){
		if (i<=t) {
			sum = sum - i;
			t = t-i;
			sumid.innerHTML = sum.toString();
		}
		if(t==0 && sum>0){
			t2 = t2+2;
			t = t2;
			tid.innerHTML = t.toString();
		}else{
			tid.innerHTML = t.toString();
		}
	}
	if (sum == 0){
		key = key + "输了！";
		alert(key)
	}
}	

function inputNumber(k){
	if(parseInt(k.value) === parseFloat(k.value) && k.value.length!==0 && Number(k.value) != 0 && Number(k.value)<=t){
		return true;
	}else{
		return false;
	}
}

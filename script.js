//your JS code here. If required.
let ans="";
for (let num = 1; num < 101; num++) {
	if (num%3 === 0 && num%5 === 0) {
		ans += "FizzBuzz\n";
		
	}
	else if(num%3 === 0){
		ans += "Fizz\n";
		
	}
	else if ( num%5 === 0) {
		ans += "Buzz\n";
	
	}
	else{
		ans += num+"\n";
	}
}
alert(ans);  
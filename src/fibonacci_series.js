'use strict';

function fibonacci_series(n) {
	var ar = [0, 1];
						
	if(n == 0)
		ar = [0];
			
	if(n > 1){
		for(var i = 2; i <= n; i++){
			ar.push(ar[i-1] + ar[i-2]);
		}
	}
			
	return ar;
}

module.exports = fibonacci_series;

function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount={};
	for (let i = 0; i < str.length; i++) {
		const char=str[i];
		charCount[char]=(charCount[char]||0)+1;
	}
	for (let j = 0; j < str.length; j++) {
		if(charCount[str[j]]===1){
			return str[j];
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

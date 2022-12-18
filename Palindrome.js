function is_palindrome( str )
{
	let j = str.length -1;
	let x,y;
	
	for( let i = 0 ; i < j/2 ;i++)
	{
	 x = str[i] ;
	 y = str[j-i];
	}
	if( x != y)
	{
	 console.log("passed string is not palindrome ");
	}
	else
	{
	 console.log("passed string is palindrome ");

	}
	
}
let test = prompt("Enter String", "");
is_palindrome(test);

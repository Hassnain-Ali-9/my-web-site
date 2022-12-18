function is_palindrome( )
{
        let str =document.getElementById("input").value; 
        if (str.length <= 10) {
	let j = str.length -1;
	let x,y;
	
	for( let i = 0 ; i < j/2 ;i++)
	{
	 x = str[i] ;
	 y = str[j-i];
	}
	if( x != y)
	{
          document.getElementById("prog").innerHTML = " It is not a palindrome.";
	 }
	else
	{
	 document.getElementById("prog").innerHTML = " It is a palindrome. ";
	}
}
else
{
document.getElementById("prog").innerHTML = "Only check upto 10 characters";
}	
}


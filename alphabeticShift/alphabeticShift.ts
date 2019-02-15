function alphabeticShift(inputString: string): string 
{
    var reorderedString = [];

    for (let i = 0; i < inputString.length; i++)
    {
        if (inputString[i] == 'z')
        {
            reorderedString[i] = 'a';
        }
        else
        {
            reorderedString.push(String.fromCharCode(inputString.charCodeAt(i) + 1));
        }
        
    }

    return reorderedString.join('');

}

console.log(alphabeticShift('crazy'));
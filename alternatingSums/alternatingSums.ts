function alternatingSums(a: number[]): number[]
{
    let evenSum = 0;
    let oddSum = 0;

    a.forEach((item: number) => {
        if (item % 2 === 0)
        {
            evenSum += item;
        }
        else
        {
            oddSum += item;
        }
    });

    return [evenSum, oddSum];

}

console.log(alternatingSums([50, 60, 60, 45, 70]))
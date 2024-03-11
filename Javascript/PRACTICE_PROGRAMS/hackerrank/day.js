function isLeapYear(year)
{
    if(year<1918)
        if(year%4===0)return true; 
    else year%400===0?true:year % 4===0 && year%100!=0?true:false;  
}
function dayOfProgrammer(year) {


    let days=256,i=0;
    let months=[31,isLeapYear(year)?28:29,31,30,31,30,31,31,30,31,30,31];
    while(days>months[i])
    {
        days-=months[i];
        i++;
    }
    i++;
    days++;
    i=i<10?'0'+i:i;
    days=days<10?'0'+days:days;
    return `${days}.${i}.${year}`;

}
console.log(dayOfProgrammer(191))
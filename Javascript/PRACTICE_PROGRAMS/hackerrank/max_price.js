function getMoneySpent(keyboards, drives, b) {
    if(Math.min(...keyboards)+Math.min(...drives)>b)return -1;
    else
    {
        while(keyboards.length!=0 && drives.length!=0)
        {
            if(Math.max(...keyboards)+Math.max(...drives)<=b)return Math.max(...keyboards)+Math.max(...drives);
            else{
                if(Math.max(...keyboards)>Math.max(...drives))keyboards=keyboards.filter((element)=>element!=Math.max(...keyboards));
                else drives=drives.filter((element)=>element!=Math.max(...drives));
            }
        }
    }
}
console.log(getMoneySpent([3,1],[5,2],7));
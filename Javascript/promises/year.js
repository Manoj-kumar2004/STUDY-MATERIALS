function dayOfProgrammer(year) {
    if(year<1918)
    {   
        let isleap=year%4===0?1:0;
        let days=[31, isleap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let day=256,i=0;
        while(day>days[i])
        {
            day-=days[i];
            i++;
        }
        day=day<10?'0'+day:""+day;
        i=i<10?'0'+i:i;
        console.log(`${day}.${i}.${year}`);
    }
        if(year>1918)
    {   
        let isleap=year%400===0?1:year%4 && year%100!=0 ?1:0;
        let days=[31, isleap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let day=256,i=0;
        while(day>days[i])
        {
            day-=days[i];
            i++;
        }
        day=day<10?'0'+day:""+day;
        i=i<10?'0'+i:i;
        console.log(`${day}.${i}.${year}`);
    }

}
dayOfProgrammer(2017)
function climbingLeaderboard(ranked, players) {
    ranked=[...new Set(ranked)];
    let rank=[];
    ranked=ranked.sort((a,b)=>a-b)
    let i=0;
    for(let ascore of players)
    {
        while(i<ranked.length && ascore>=ranked[i])i++;
        rank.push(ranked.length-i+1);

    }
    return rank
}
console.log(...climbingLeaderboard([100,90,90,80],[70,80,105]))
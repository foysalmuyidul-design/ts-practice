// 5—EsportsTournamentPlayerStats.ts
interface Player 
{
    name: string;
    scores: number[];
}

const getPlayerStats = (player:Player): {name:string, average: number, rank: string} =>{
    const playerAverage = player.scores.reduce((acm, score)=>{return acm+score},0) / player.scores.length
    return {name:player.name,average:playerAverage,rank:playerAverage>=80?"MVP":"Rookie"}

}
console.log(getPlayerStats({
    name: "Zex",
    scores: [80, 89, 90, 60]
}
)
)
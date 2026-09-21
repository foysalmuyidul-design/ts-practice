// 4—MusicAppListeningTimeTracker.ts
interface Track{
    title: string;
    minutes: number;

}
const calculateTotalListeningTime = ( tracks: Track[]) : number=> {
    return tracks.reduce((acm, track)=>{
        return acm+track.minutes
    },0)
}
const tracks = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 5 }

];
 


console.log(calculateTotalListeningTime(tracks))
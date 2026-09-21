// 6—MusicAppFeatureAccess.ts
type Tier = "free" | "pro" | "premium"
const canAccessOfflineMode = (tier:Tier):boolean => {
    if(tier === "pro" || tier === "premium"){
        return true
    }
    return false
}

console.log(canAccessOfflineMode("premium"))
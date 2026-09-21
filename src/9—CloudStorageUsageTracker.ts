// 9—CloudStorageUsageTracker.ts

interface UploadAction
{
    type: "upload",
    sizeMB: number
}
interface DeleteAction
{
    type: "delete",
    sizeMB: number
}


const updateStorageUsage = (currentUsageMB: number, action: UploadAction | DeleteAction): number => {
    if(action.type === "delete"){
        if(currentUsageMB < action.sizeMB){
            return 0
        }
        return currentUsageMB - action.sizeMB
    }
    return currentUsageMB + action.sizeMB

}
console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }))


console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 }))

console.log(updateStorageUsage(500, { type: "delete", sizeMB: 800 }))

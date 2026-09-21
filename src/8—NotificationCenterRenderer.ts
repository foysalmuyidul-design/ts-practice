// 8—NotificationCenterRenderer.ts


interface Like_Notification
{
    type: "like",
    fromUser: string
}
interface System_Notification
{
    type: "system",
    message: string,
    actionUrl?: string | undefined
}


const renderNotification = (notification: Like_Notification | System_Notification): string => {
    if(notification.type === "system"){
        if(notification.actionUrl === undefined){
            return `System: ${notification.message} (Tap to view)`    
        }
        return `System: ${notification.message}`
    }
    return `${notification.fromUser} liked your post.`
}
console.log(renderNotification({ type: "like", fromUser: "Aisha" }))

console.log(renderNotification({ type: "system", message: "Maintenance complete." }))

console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }))
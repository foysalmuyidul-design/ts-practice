// 2—SmartHomeWiFiSignalStatus.ts

const getSignalStatus = (strength:number):string =>{
    if (strength >=0 && strength<= 20){
        return "Weak"
    }else if (strength >=21 && strength<= 50){
        return "Fair"
    }else if (strength >=51 && strength<= 80){
        return "Good"
    }
    
        return "Excellent"
    

}
console.log(getSignalStatus(10))
console.log(getSignalStatus(35))
console.log(getSignalStatus(65))
console.log(getSignalStatus(95))

console.log(getSignalStatus(20))
console.log(getSignalStatus(21))
console.log(getSignalStatus(80))
console.log(getSignalStatus(81))
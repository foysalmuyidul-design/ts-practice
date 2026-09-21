// 10—EVScooterRentalFeeCalculator.ts
type VehicleTypes = "scooter" | "ebike" | "moped"
const calculateRentalFee = (vehicle:VehicleTypes, minutes:number): number => {
    if (vehicle === "scooter"){
        return 10+ (minutes*2)
    }else if (vehicle === "ebike"){
        return 15+ (minutes*3)
    }
    return 25+ (minutes*5)
}
console.log(calculateRentalFee("scooter", 20))

console.log(calculateRentalFee("ebike", 20))


console.log(calculateRentalFee("moped", 20))

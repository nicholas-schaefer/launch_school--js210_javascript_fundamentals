const logOccurrences = (arrayOfVehicles) => {
    const occurrences = calculateOccurrences(arrayOfVehicles);
    for (const keyVehicle in occurrences){
        const valueCount = occurrences[keyVehicle];
        console.log(`${keyVehicle} => ${valueCount}`);
    }
}

const calculateOccurrences = (arrayOfVehicles) => {
    const vehiclesCountObject = {};

    for (const vehicle of vehicles){
        vehiclesCountObject[vehicle] ??= 0;
        vehiclesCountObject[vehicle]  += 1;
    }
    return vehiclesCountObject
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
    'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

logOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
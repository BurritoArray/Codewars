// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

function number (busStops) {
    let numOnBus = 0
    for (let i = 0; i < busStops.length; i++) {
        numOnBus += busStops[i][0]
        numOnBus -= busStops[i][1]
    } return numOnBus
}

console.log(number([[28,0],[9,6],[37,14],[74,35],[92,49],[70,70],[62,112],[73,76],[45,45],[83,64],[46,84],[50,48],[76,42],[12,82],[57,20],[58,34],[62,5]]))
console.log(number([[10,0],[3,5],[5,8]]))
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))
console.log(number([[0,0]]))
//update
// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.

type keyInput = 'up' | 'down' | 'left' | 'right'

enum Directions {
    Up = 1, // 0
    Down, // 1
    Left, // 2
    Right // 3
}

// enum Direction {
//     Up = "UP",
//     Down = "Down",
//     Left = "Left",
//     Right = 'Right'
// }

function somethingDo(keyPressed: Directions){
    // do something
    if(keyPressed == Directions.Up){

    }
}
somethingDo(Directions.Up)
somethingDo(Directions.Down)
somethingDo(Directions.Left)

// Common usecase in express
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })





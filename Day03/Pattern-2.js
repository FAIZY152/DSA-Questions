// function Pattern() {
//     for (let i = 5; i >= 1; i--) {
//     let row = ""
//    for (let j = 1; j <= i ; j++) {
//     row = row + "*"
// }    
// console.log(row);

// }
// }
// let res = Pattern()
// console.log(res);

//      *
//     **
//    ***
//   ****
// ******

function Pattern(n) {
//  5 will be our n 
for (let i = 1; i <= 5; i++) {
    let row = ""
        for (let j = 0; j < 5 - i + 1 ; j++) {
            row+="-"
        }    
        for (let k = 0; k < i +1 ;  k++) {
        row+= "*"            
        }
            console.log(row);

    }
    
}
let res = Pattern()
console.log(res);

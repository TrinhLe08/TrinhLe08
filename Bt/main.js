// Array.prototype.Vip = function(callback){
// let len = this.length
// let A = []
// for (let i = 0; i < len; i++) {
  
    
//    A.push(callback(this[i],i))  
// }
// return A
// }


// var King = [
//     'King',
//     'Atomic',
//     'Trình Lê 08'
// ]


// let newKing = King.Vip((a,b)=>{
// return b*b
// })

// console.log(newKing);


function Vip(a){
   a('Atomic')
}

function King(a){
    console.log(`I am ${a}`);
}

Vip(King)



 
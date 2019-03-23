
let random = require('randomstring')

function generateUser(num){
  let randomObjects = [];
  for(i = 0; i < num; i++){
    if(i % 2 === 0){
      randomObjects.push({name: random.generate(7)})
    }else{
      randomObjects.push({name: random.generate(3)})
    }
  }
  return randomObjects;
}

function checkLengthFor7(str){
  if(str.length === 7){
    return true
  }else{
    return false
  }
}

/**
 *  Added functionalities below
 * **/
// function newFeature(){
//   let a = 0
//   let b = 5
//   let str1 = random.generate()
//   let str2 = random.generate()
//
//   for (i = 0; i < 4; i++){
//     str1 = str1 + (a + i)
//     str2 = str2 + (b * i)
//   }
//
//   someUseFulNewFunc();
//   return {str1 : str1, str2: str2}
// }
//
// function someUseFulNewFunc(){
//   console.log("Doing something super genius here")
//   let a = 4
//   let b = 9
//   let c = a + b
//   return c
// }

// module.exports = {checkLengthFor7, generateUser, newFeature}
module.exports = {checkLengthFor7, generateUser}
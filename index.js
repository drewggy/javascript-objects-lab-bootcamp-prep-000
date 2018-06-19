function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){

  obj[key]=value;
  return obj;
}

function updateObjectWithKeyAndValue(obj, key, value){
  var newObj = Object.assign({}, obj);
//  var oldKey oldValue;

//  if (obj[key]){
//    oldKey = key;
//    oldValue = value;
//    delete obj[key];
//  }
  newObj[key]=value;
  return newObj;
}
*/


var recipes = {};

recipes['cookie']="a bit of this and that";
recipes['cake']="more of that";



console.log(JSON.stringify(destructivelyUpdateObjectWithKeyAndValue(recipes,'pie',"much more of that")));
console.log(JSON.stringify(updateObjectWithKeyAndValue(recipes,'tart',"more of this, less of that")));

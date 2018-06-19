function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){

  obj[key]=value;
  return obj;
}

/*
function updateObjectWithKeyAndValue(obj, key, value){
  var oldKey oldValue;

  if (obj[key]){
    oldKey = key;
    oldValue = value;
    delete obj[key];
  }
  obj[key]=value;
  return key, value, oldKey, oldValue;
}
*/


var recipes = {};

recipes['cookie']="a bit of this and that";
recipes['cake']="more of that";



console.log(JSON.stringify(destructivelyUpdateObjectWithKeyAndValue(recipes,'pie',"much more of that"));

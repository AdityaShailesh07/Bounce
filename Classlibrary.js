function isTouching(object1,object2)
{

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  
      return true;
}
else {
 return false;
}
}
function bounceOff(object4,object3){
    if (object4.x - object3.x < object3.width/2 + object4.width/2
        && object3.x - object4.x < object3.width/2 + object4.width/2) {
      object4.velocityX = object4.velocityX * (-1);
      object3.velocityX = object3.velocityX * (-1);
    }
    if (object4.y - object3.y < object3.height/2 + object4.height/2
      && object3.y - object4.y < object3.height/2 + object4.height/2){
      object4.velocityY = movingRect.velocityY * (-1);
      object3.velocityY = fixedRect.velocityY * (-1);
    }



}
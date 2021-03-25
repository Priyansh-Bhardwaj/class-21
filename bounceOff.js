function bounceOff(yy,zz){
    if (yy.x - zz.x < zz.width/2 + yy.width/2
   && zz.x - yy.x < zz.width/2 + yy.width/2) {
 yy.velocityX = yy.velocityX * (-1);
 zz.velocityX = zz.velocityX * (-1);
 }
 if (yy.y - zz.y < zz.height/2 + yy.height/2
 && zz.y - yy.y < zz.height/2 + yy.height/2){
 yy.velocityY = yy.velocityY * (-1);
 zz.velocityY = zz.velocityY * (-1);
 }
 }
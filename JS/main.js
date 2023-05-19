//Char=[image,name,description,title,skill,hp,atk,weapon]
Peter=["images/Peter.png","Peter","Peter is the twin of Julie. He is passionated for adventure stories and now he will embark in an adventure to find his mother and her secrets.","The Adventurer","Endless Backpack",100,10,"Shovel"]
Julie=["images/Julie.png","Julie","Julie is the twin of Peter. She is always trying to find an adventure and now she will embark in a new one to find her mother and her secrets.","The Adventurer","Endless Backpack",100,10,"Boomerang"]
Harry=["images/Harry.png","Harry","","The Elf","Nature' Beauty",120,10,"Stick"]
Greg=["images/Greg.png","Greg","","The Gunslinger","Dead Shot",100,12,"Revolver"]
Mary=["images/Mary.png","Mary","","The Radiant","Radiance",150,15,"Radiant Weapons"]
Thomas=["images/Thomas.png","Thomas","","The Golden","Mercenaries",100,20,"Gold Bars"]
Jeanne=["images/Jeanne.png","Jeanne","","The Maiden","Judgement Sword",100,15,"Cross"]
Emily=["images/Emily.png","Emily","","The Strong","Buff",200,20,"Iron Gloves"]

function char(name) {
    document.getElementById('char-image').src = name[0];
    document.getElementById('char-name').innerHTML = name[1];
    document.getElementById('char-description').innerHTML = name[2];
    document.getElementById('char-title').innerHTML = name[3];
    document.getElementById('char-skill').innerHTML = name[4];
    document.getElementById('char-hp').innerHTML = name[5];
    document.getElementById('char-atk').innerHTML = name[6];
    document.getElementById('char-weapon').innerHTML = name[7];
}
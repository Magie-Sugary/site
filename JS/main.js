//Char=[image,name,description,title,skill,hp,atk,weapon]
Peter=["images/Peter.png","Peter","Peter is the twin of Julie. He is passionated for adventure stories and now he will embark in an adventure to find his mother and her secrets.","The Adventurer","Endless Backpack",100,10,"Shovel"]
Julie=["images/Julie.png","Julie","Julie is the twin of Peter. She is always trying to find an adventure and now she will embark in a new one to find her mother and her secrets.","The Adventurer","Endless Backpack",100,10,"Boomerang"]


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
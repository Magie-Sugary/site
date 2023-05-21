﻿//Char=[image,name,description,title,skill,hp,atk,weapon]
Peter=["images/Peter.png","Peter","Peter is the twin of Julie. He is passionated for adventure stories and now he will embark in an adventure to find his mother and her secrets.","The Adventurer","Endless Backpack",100,10,"Shovel"]
Julie=["images/Julie.png","Julie","Julie is the twin of Peter. She is always trying to find an adventure and now she will embark in a new one to find her mother and her secrets.","The Adventurer","Endless Backpack",100,10,"Boomerang"]
Harry=["images/Harry.png","Harry","Harry is an elf, born from the sacred tree, who seeks to aid the forest and all the animals that dwell within it.","The Elf","Nature' Beauty",120,10,"Stick"]
Greg=["images/Greg.png","Greg","Greg, The Dead Shot, is known for his shooting prowess, which frightens many. However, behind his rough facade, he has a compassionate heart and is devoted to his sense of justice.","The Gunslinger","Dead Shot",100,12,"Revolver"]
Mary=["images/Mary.png","Mary","Mary is a joyful young woman who loves to wear colorful and cheerful clothes and accessories. She possesses an unwavering optimism, always seeking the silver lining in every situation, which is why she always has an infectious smile that can lights up the room. She is consistently seen as someone others can rely on.<br><br>Mary lived her childhood confined in the White Room, a place devoid of any happiness and color, until she managed to break free with her sister, <b>Melody</b>. However, during the escape, they got separated, and now she is tirelessly searching for her beloved sister.","The Radiant","Radiance",150,15,"Radiant Weapons"]
Thomas=["images/Thomas.png","Thomas","Thomas is a wealthy entrepreneur who came from Spriggan, where he amassed considerable wealth and fame. The relentless pressure and constant attention began to suffocate him, igniting a desire for a simpler life. Despite this longing, Thomas found it challenging to break free from the luxuries he had grown accustomed to.<br><br>During his childhood, Thomas endured life on the streets of Spriggan, struggling to survive each passing day. It was during this difficult time that he crossed paths with a young man who offered him an opportunity to transcend his circumstances. Ever since that encounter, Thomas has carried a deep sense of gratitude and an unwavering determination to find and repay the kindness bestowed upon him.","The Golden","Mercenaries",100,20,"Gold Bars"]
Jeanne=["images/Jeanne.png","Jeanne","Jeanne is the embodiment of purity and poise. Her mere presence captivates all who behold her. Despite her delicate appearance, she harbors an unwavering faith and a profound sense of justice.<br><br>Born in a small village, Jeanne was aware from a young age that she was destined for a grand purpose. However, she understood the importance of remaining humble and aiding those in need.","The Maiden","Judgement Sword",100,15,"Cross"]
Emily=["images/Emily.png","Emily","Emily is renowned as the mightiest warrior, driven by her father's words she made a vow to protect the vulnerable. Her strength strikes fear into the hearts of those who dare to defy her and inspires the oppressed.<br><br>During her childhood, Emily's extraordinary strength made it difficult for her to befriend other children. Consequently, she always longed to find someone equally formidable, hoping to forge a friendship based on shared strength and camaraderie.","The Strong","Buff",200,20,"Iron Gloves"]

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
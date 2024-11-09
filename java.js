var img=document.getElementById("photo");
var imgname=["ae8707675f374b728ef9cf511d164ecd.jpg","colorfulba_yzjnqhav.gif","88ddbd7a8d3977c6a60169b4bcf561f4.jpg","1976321f2412001be2fadf8c7b298c81 copy.jpg","dcc6b0b45b70c43db86c7086db634d59.jpg"];
var counter=0;

function changeimage(){
    if(counter>=imgname.length){
        counter=0;
    }
    else{
        img.src=imgname[counter];
        counter++;
    }
}
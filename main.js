 //11. print hollow square 

 let row = prompt("enter a row : ");
 let col = prompt("enter a column : ");

 for(i=0;i<col;i++){
     for (j=0;j<row;j++){
         if(i==0||i==row-1||j==0||j==col-1){
             document.write("*&nbsp;&nbsp;");
         }else {
             document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
         }
     }
     document.write("<br>");
 }

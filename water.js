
var cups = 19;
var cols = 4;
var rows = Math.ceil(cups/4);
if ((cups % 4) != 0){
  var extra = cups % 4;
}
var table = '<table align = "center"; width = "50%">';
for(var r = 1; r < (rows+1); r++)
{
   table += '<tr>';
   if ((r != rows) && (cups >= 4)) {
   for (var c = 0; c < cols; c++) {
       table += '<td><img id="bottle1" src="empty.png" style="width:100px"/>';
       table += '<br><br>';
       table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'empty.png\'">Empty</button>';
       table += '<br><br>';
       table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'half.png\'">Fill 4 oz</button>';
       table += '<br><br>';
       table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'full.png\'">Fill 8 oz</button>';
       table += '</td>';

     }
   }
   if ((r == rows) && ((cups % 4) !== 0) && (cups >= 4)) {
     for (var c = 0; c < extra; c++){
       table += '<td><img id="bottle1" src="empty.png" style="width:100px"/>';
       table += '<br><br>';
       table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'empty.png\'">Empty</button>';
       table += '<br><br>';
       table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'half.png\'">Fill 4 oz</button>';
       table += '<br><br>';
       table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'full.png\'">Fill 8 oz</button>';
       table += '</td>';
     }
   }
   if ((cups < 4) && (r != rows)){
     for (var c = 0; c < cups; c++) {
         table += '<td><img id="bottle1" src="empty.png" style="width:100px"/>';
         table += '<br><br>';
         table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'empty.png\'">Empty</button>';
         table += '<br><br>';
         table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'half.png\'">Fill 4 oz</button>';
         table += '<br><br>';
         table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'full.png\'">Fill 8 oz</button>';
         table += '</td>';

       }
   }
   table += '</tr>';
}
table += '</table>';
console.log(table);


document.write(table);

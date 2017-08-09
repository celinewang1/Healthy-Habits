var hours = 3;
var cols = 4;
var half = hours*2;
var rows = Math.ceil(half/4);
var n = 1;
if ((half % 4) != 0){
  var extra = half % 4;
}
var table = '<table style="width:75%" align="center">';

for(var r = 1; r < (rows+1); r++)
{
   table += '<tr>';
   if ((r != rows) && (half >= 4)) {
   for (var c = 0; c < cols; c++) {
     table += '<td><img id="dumbell" + n src="picmonkeydumbells.png" style="width:150px">';
     table +=  '<br>';
     table += '<button onclick="document.getElementById(\'dumbell1\').src=\'picmonkeydumbells.png\'">Reset</button><br><br>'
     table += '<button onclick="document.getElementById(\'dumbell1\').src=\'colored dumbell.png\'"> Add 30 Mintues</button>'
     table += '<br>'
    table +=  '</td>'
     }
   }
   if ((r == rows) && ((half % 4) !== 0) && (half >= 4)) {
     for (var c = 0; c < extra; c++){
       table += '<td><img id="dumbell1" src="picmonkeydumbells.png" style="width:150px">';
       table +=  '<br>';
       table += '<button onclick="document.getElementById(\'dumbell1\').src=\'picmonkeydumbells.png\'">Reset</button><br><br>'
       table += '<button onclick="document.getElementById(\'dumbell1\').src=\'colored dumbell.png\'"> Add 30 Mintues</button>'
       table += '<br>'
      table +=  '</td>'
     }
   }
   if ((r == rows) && ((half % 4) == 0) && (half >= 4)) {
     for (var c = 0; c < cols; c++){
       table += '<td><img id="dumbell1" src="picmonkeydumbells.png" style="width:150px">';
       table +=  '<br>';
       table += '<button onclick="document.getElementById(\'dumbell1\').src=\'picmonkeydumbells.png\'">Reset</button><br><br>'
       table += '<button onclick="document.getElementById(\'dumbell1\').src=\'colored dumbell.png\'"> Add 30 Mintues</button>'
       table += '<br>'
      table +=  '</td>'
     }
   }
   if ((half < 4) && (r != rows)){
     for (var c = 0; c < half; c++) {
       table += '<td><img id="dumbell1" src="picmonkeydumbells.png" style="width:150px">';
       table +=  '<br>';
       table += '<button onclick="document.getElementById(\'dumbell1\').src=\'picmonkeydumbells.png\'">Reset</button><br><br>'
       table += '<button onclick="document.getElementById(\'dumbell1\').src=\'colored dumbell.png\'"> Add 30 Mintues</button>'
       table += '<br>'
      table +=  '</td>'
       }
   }
   table += '</tr>';
}
table += '</table>';
console.log(table);


document.write(table);

var hours = 4;
var cols = 4;
var half = hours*2;
var rows = Math.ceil(dumbells/4);
var i = 1;
}
var table = '<table style="width:75%" align="center">';
for (var r = 1; r <= rows; r++)
{
   table += '<tr>';
   for (var c = 0; c < cols; c++) {
     if (i <= dumbells) {

            table += '<td><img id=\'dumbell' + i + '\' src=\'picmonkeydumbells.png\' style="width:100px">';
            table += '<br><br>';
            table += '<button class="button" onclick="document.getElementById(\'dumbell' + i + '\').src=\'picmonkeydumbells.png\'">Reset</button>';
            table += '<br><br>';
            table += '<button class="button" onclick="document.getElementById(\'bottle' + i + '\').src=\'colored dumbells.png\'">Add 30 Mintues</button>';
            table += '<br><br>';
            table += '</td>';
            i++;
          }
        }
        table += '</tr>';
     }
     table += '</table>';
     document.write(table);

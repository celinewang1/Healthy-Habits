
var cups = 8;
var cols = 4;
var rows = Math.ceil(cups/4);
var i = 1;
var table = '<table align = "center"; width = "50%">';
for (var r = 1; r <= rows; r++)
{
   table += '<tr>';
   for (var c = 0; c < cols; c++) {
     if (i <= cups) {

       table += '<td><img id=\'bottle' + i + '\' src=\'empty.png\' style="width:100px">';
       table += '<br><br>';
       table += '<button class="button" onclick="document.getElementById(\'bottle' + i + '\').src=\'empty.png\'">reset</button>';
       table += '<br><br>';
       table += '<button class="button" onclick="document.getElementById(\'bottle' + i + '\').src=\'half.png\'">Fill 4 oz</button>';
       table += '<br><br>';
       table += '<button class="button" onclick="document.getElementById(\'bottle' + i + '\').src=\'full.png\'">Fill 8 oz</button>';
       table += '</td>';
       i++;
     }
   }
   table += '</tr>';
}
table += '</table>';
document.write(table);

var rows = 1;
var cols = 1;
var table = '<table>';
for(var r = 0; r < rows; r++)
{
   table += '<tr>';
   for (var c = 0; c < cols; c++) {
       table += '<td><img id="bottle1" src="empty.png" style="width:100px"/>'
       table += '<br><br>'
       table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'empty.png\'>Empty</button>'
       table += '<br><br>'
       table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'half.png\'">Fill 4 oz</button>'
       table += '<br><br>'
       table += '<button class="button" onclick="document.getElementById(\'bottle1\').src=\'full.png\'">Fill 8 oz</button>'
       table += '</td>'

     }
   table += '</tr>';
}
table += '</table>';
console.log(table)


document.write(table);

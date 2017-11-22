$("#btnPrint").on('click', function () {
    console.log("HI");
    var divContents = $("#body").html();
    var printWindow = window.open('', '', 'height=400,width=800');
    var heading = '<body id = "body"><br><br><br><table align ="center" cell-padding = "5"><tr><td>Closers:</td><td style ="border-bottom:1px solid black;">';
    printWindow.document.write('<html><head><title>DIV Contents</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(heading);
    printWindow.document.write($("#gs").val());
    printWindow.document.write('</td><td> & </td><td style ="border-bottom:1px solid black;">');
    printWindow.document.write('</td></table><br><br>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();

  });

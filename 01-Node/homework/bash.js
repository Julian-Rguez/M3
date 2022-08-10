const commands = require ('./commands');

    process.stdout.write('prompt > '); // muestra mensaje en linea    
    process.stdin.on('data', function (data) {//stdin 'data' se dispara cuando el user escribe una línea
     let cmd = data.toString().trim(); //trim remueve la nueva línea demas
     let arrCmd = cmd.split(" ")[0];

     if (commands[arrCmd]){
      commands[arrCmd](cmd,arrCmd);
     }
     else
     {
      process.stdout.write ("Command no found")
     }

     process.stdout.write('\nprompt > ');// nueva linea con mensaje
    });
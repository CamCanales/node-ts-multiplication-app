import { options } from "yargs";
import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

//sintaxis de funcion anonima autoinvocada
(async() =>{
    await main();
})();

async function main(){
    //al utilizar yargs, debemos pasar si o si los argumenos que definimos como un objeto    
    const {b:base, l: limit, s: showTable, n: fileName, d: fileDestination} =  yarg;
    ServerApp.run({base, limit, showTable, fileName, fileDestination});
    
}





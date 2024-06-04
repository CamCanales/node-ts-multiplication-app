import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile, SaveFileUseCase } from '../domain/use-cases/save-file.use-case';

//reglas que agregamos a un objeto (todas son obligatorias)
interface RunOptions{
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string;
}

export class ServerApp{

    //static para no instanciar la clase
    static run({base, limit, showTable, fileName, fileDestination}: RunOptions){
        console.log('server running...');
        
        //creamos la instancia y podríamos tener la injección de dependencias que no tenemos
        const table = new CreateTable().execute({base, limit});


        const wasCreated = new SaveFile()
            .execute({
                fileContent: table,
                fileDestination, 
                fileName
            });

        if(showTable) console.log(table);

        (wasCreated) ? console.log('file created') : console.log('file no created');
    }
}
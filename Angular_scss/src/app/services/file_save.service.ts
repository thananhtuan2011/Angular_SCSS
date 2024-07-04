import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';


@Injectable({
    providedIn: 'root'
})
export class FileSaveService {

    constructor() { }

    public saveDataAsJson(data: any, fileName: string): void {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        FileSaver.saveAs(blob, `${fileName}.json`);
    }

}

import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { FileObj } from '../file-obj'


@Component({
    selector: 'app-file-select',
    templateUrl: './file-select.component.html',
    styleUrls: ['./file-select.component.css']
})
export class FileSelectComponent implements OnInit {

    private files: FileObj[];
    private selectedFile: FileObj;
    private totalStep: number;
    constructor(private fileService: FileService) {}

    ngOnInit() {}

    private selectFile($event): void {
        const files: File[] = $event.target.files;
        this.totalStep = 0;
        this.files = [];

        for (let file of files) {
            let reader = new FileReader();
            reader.onload = () => {
                const fileText: string = reader.result;
                console.log(fileText);
                let step: number = this.countStep(fileText);
                this.totalStep += step;
                this.files.push({
                    name: file.name,
                    step: step,
                    size: file.size,
                    lastModifiedDate: file.lastModifiedDate
                });
            }
            reader.readAsText(file);
        }
        console.log(this.files)
        this.fileService.setFile(this.files);
    }

    private countStep(fileText: string): number {
        const linefeeds = fileText.match(/\n/g);
        if(linefeeds == null) {
            console.log("null!!!")
            return 0;
        }
        //console.log(linefeeds);
        return linefeeds.length;
    }

    onSelect(file: FileObj): void{
        this.selectedFile = file;
    }

}

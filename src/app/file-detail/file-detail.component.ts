import { Component, OnInit, Input } from '@angular/core';
import { FileObj } from '../file-obj'

@Component({
    selector: 'app-file-detail',
    templateUrl: './file-detail.component.html',
    styleUrls: ['./file-detail.component.css']
})
export class FileDetailComponent implements OnInit {
    @Input() file: FileObj;

    constructor() {}

    ngOnInit() {}

}

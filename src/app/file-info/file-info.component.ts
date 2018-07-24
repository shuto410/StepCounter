import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service'

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.css']
})
export class FileInfoComponent implements OnInit {
  private fileText: string;
  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.getFileText();
  }
  
  getFileText(): void{
    this.fileText = this.fileService.getFileText();
  }

}

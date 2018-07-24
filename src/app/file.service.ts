import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private fileText: string;
  private file;

  constructor() { }

  setFileText(fileText: string): void {
    this.fileText = fileText;
  }
  
  getFileText(): string {
    return this.fileText;
  }
  
  setFile(file){
    this.file = file;
  }

  getFile(){
    return this.file;
  }
}

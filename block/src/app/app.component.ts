import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'block';
  public boxs: any[] =[];
  public backColor: string = "#888";
  public change: string = "#333";

  ngOnInit() {
    this.createBoxs();
  }

  public changeColor(i, j){
    this.boxs[i][j] = this.change;
  }

  public createBoxs(){
    var blockCount = 17;
    var blocksPerRow = 4;
    var row = Math.ceil(blockCount/blocksPerRow);
    for (var i = 0; i< row; i++){
       this.boxs.push([]);
    }

    var count = 0;
    var j = 0;
    for(var i = 0; i< blockCount; i++){
       this.boxs[j][count] = this.backColor;
       count += 1;
       if(count == blocksPerRow){
         count = 0;
         j += 1;
       }
    }

  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  checkbox: boolean = false
  objects: myObject[] = []

  constructor() {
    for (let i=1; i<5; i++) {
      this.objects.push(new myObject(i,'Name' + i.toString(),i*10))
    }
  }

  public checkBoxChangeListener(event) {
    console.log(this.checkbox);
  }
}

export class myObject {
  id: number;
  name: string;
  dencity: number;

  constructor(id:number, name:string, dencity:number) {
    this.id = id;
    this.name = name;
    this.dencity = dencity;
  }
}
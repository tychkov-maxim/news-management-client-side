import { Component } from '@angular/core';

import {HeroService} from "./hero.service";

@Component({
  selector: 'my-app',
  providers: [HeroService],
  template: `<h1>Hello {{name}} and then we will have more info</h1>
    
    <ul>
      <li *ngFor="let hero of heroes" (click)="onClick(hero)">
        {{hero}}
      </li>
    </ul>
  
  
    <button (click)="getHero()"> Get Random Hero from service </button><br/>
  
    MyHero: {{myHero}}
  
    <div *ngIf="errorMessage">
      {{errorMessage}}
    </div>
  `,
})
export class AppComponent  {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];

  errorMessage : string;

  constructor(private heroSerivce : HeroService){
  }

  onClick(hero : string){
    this.myHero = hero;
  }

  getHero(){
    this.heroSerivce.getRandomHero().subscribe(
      hero => this.myHero = hero,
      error =>  this.errorMessage = <any>error);
  }

}

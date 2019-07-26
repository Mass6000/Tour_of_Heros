import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from "../hero.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes: Hero[];
  // below is better practice and allows unsubscribe when complete
  // when using Observable in this way $ is the last character in param
  // if param as a final s then $ else add a $
  // see heroes.component.html
  heroe$: Observable<Hero[]>;

  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    // see above remark
  this.heroe$ = this.heroService.getHeroes();
  }
}

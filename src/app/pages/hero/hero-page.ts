import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.html'
})

export class HeroPageComponent {
  name = signal('David');
  age = signal(41);
  getHeroDescription(){
    
  }
  heroDescription = computed(()=>{
    return `${this.name()} - ${this.age()}`
  })
  capitalized = computed(()=>{
    return this.name().toUpperCase()
  })
  changeHero(){
    this.name.update(()=> 'Spiderman');
    this.age.update(()=> 22);
  }
  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }
  changeAge(){
    this.age.set(60);
  }
}
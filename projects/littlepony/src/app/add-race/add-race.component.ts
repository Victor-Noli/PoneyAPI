import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PONIES } from '../mock-ponies';
import { RACES } from '../mock-races';
import { Pony } from '../pony';
import { Race } from '../race';

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css']
})
export class AddRaceComponent implements OnInit {

  model: Race = new Race();
  poniesBool = Array<boolean>();
  allPonies = PONIES;
  add: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id') == null){
      this.add = true;
    }else{
      this.add = false;
      let s  = this.route.snapshot.paramMap.get('id');
      const id = parseInt(s == null ? "0" : s, 0);
      // spécial mock
      for(let i = 0; i < PONIES.length; i ++){
        if(RACES[i].id_race === id){
          this.model = RACES[i];
          break;
        }
      }
    }
  }

  onSubmit(): void{
    if(this.add){
      for (let index = 0; index < this.poniesBool.length; index++) {
        if (this.poniesBool[index]){
          this.model.ponies.push(this.allPonies[index]);
        }
      }
      RACES.push(this.model);
    }
    this.router.navigate(['/races']);
  }

}

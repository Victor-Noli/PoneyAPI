import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { PONIES } from '../mock-ponies';
import { Pony } from '../pony';

@Component({
  selector: 'app-add-pony',
  templateUrl: './add-pony.component.html',
  styleUrls: ['./add-pony.component.css']
})
export class AddPonyComponent implements OnInit {

  newPony: Pony = new Pony();
  add :boolean = true;

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')==null){
      this.add = true;
    } else {
      this.add = false;
      let s = this.route.snapshot.paramMap.get('id');
      const id = parseInt(s == null ? "O" : s, 0);
      // spécial mock
      for (let i = 0; i < PONIES.length; i ++){
        if(PONIES[i].id == id){
          this.newPony = PONIES[i];
          break;
        }
      }
    }
  }

  onSubmit() : void{
    this.newPony.id = PONIES.length;
    PONIES.push(this.newPony);
    // avec les mock casser le pointeur qui fait que tous les poney ajoutés sont les mêmes
    this.newPony = new Pony();
    this.router.navigate(['']);
  }

}

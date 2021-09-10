import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PONIES } from '../mock-ponies';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-add-pony',
  templateUrl: './add-pony.component.html',
  styleUrls: ['./add-pony.component.css']
})
export class AddPonyComponent implements OnInit {

  newPony: Pony = new Pony();
  add :boolean = true;

  constructor(private router:Router, private route: ActivatedRoute, private ponyService: PonyService) { }


  ngOnInit(): void {

    if(this.route.snapshot.paramMap.get('id') == null){
      this.add = true;
    }else{
      this.add = false;
      let s  = this.route.snapshot.paramMap.get('id');
      const id = parseInt(s == null ? "0" : s, 0);
      this.ponyService.getPony(id).subscribe(p => this.newPony = p);
    }
  }

  onSubmit() : void{
    if(this.add){
      this.newPony.id = PONIES.length;
      this.newPony = new Pony();
    }else{
      this.ponyService.updatePony(this.newPony).subscribe();
    }
    this.router.navigate(['']);
  }

}

import { Iproducts } from './../../products';
import { CrudService } from './../../services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  item:any;
  constructor(private router: ActivatedRoute,
              private crud : CrudService) { }

  ngOnInit(): void {
    this.getElement();
  }
  getElement(){
   const search :string =this.router.snapshot.params["q"];
   this.crud.get().subscribe(data=>{
     if(data != undefined){
      this.item=data.filter(e=>e.title == search);
      console.log(this.item)
     }
  })

  }
}

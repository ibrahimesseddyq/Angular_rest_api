import { Iproducts } from './../../products';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  product: any=[];
  lastId:number=0;
  newPost : any=this.form.group({
    id:'',
    title:'',
    price:''
  });
  constructor(
              private crud:CrudService,
              private form:FormBuilder
              ) {
    
   }

  ngOnInit(): void {
    this.getPosts()

  }
  getPosts(){
    this.crud.get().subscribe(product =>{
      this.product = product;
    })
  }
  deletePost(id:number){
    this.crud.delete(id).subscribe(()=>{
      this.product= this.product.filter((e:any)=>e.id != id);
    })
  }
  addPost(){
    this.crud.postD(this.newPost.value).subscribe(post=>{
      this.product= [...this.product,post]
    });
    this.newPost.reset();
  }

}

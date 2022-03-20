import { Iproducts } from './../../products';
import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editPost= new FormGroup({
    title:new FormControl(''),
    price:new FormControl('')
  });
  queryId : any;
  constructor(private router:ActivatedRoute,private crud:CrudService) { }

  ngOnInit(): void {
    this.queryId=this.router.snapshot.params['id']
    this.crud.getOne(this.queryId).subscribe(data=>{
      this.editPost.patchValue(data);
    });
  }
  onSubmit(){
    let sentData= {
                id: parseInt(this.queryId),
                title: this.editPost.value.title,
                price: this.editPost.value.price
              };
    this.crud.update(sentData.id,sentData).subscribe(data=>{
      console.log(data);
    })
  }


}

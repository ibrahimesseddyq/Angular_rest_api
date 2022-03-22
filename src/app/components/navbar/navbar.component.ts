import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  form =new FormGroup({
    searchInput:new FormControl()
  });
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate(['search',this.form.value.searchInput]);
  }
}

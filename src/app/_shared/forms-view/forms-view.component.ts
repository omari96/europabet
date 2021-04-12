import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forms-view',
  templateUrl: './forms-view.component.html',
  styleUrls: ['./forms-view.component.scss']
})
export class FormsViewComponent implements OnInit {
  genders = ['ქალი', 'კაცი'];

  @Input() userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    pid: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{11}$")]),
    mobNum: new FormControl('', [Validators.required, Validators.pattern("^[0-8]{9}$")]),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    gender: new FormControl('კაცი'),
  });

  constructor() { }

  ngOnInit(): void {
  }

}

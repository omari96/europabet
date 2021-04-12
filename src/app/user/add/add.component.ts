import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  allUser: Object = Object;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    pid: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{11}$")]),
    mobNum: new FormControl('', [Validators.required, Validators.pattern("^[0-8]{9}$")]),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    gender: new FormControl('კაცი'),
  });

  constructor(private userService: UserService, private _location: Location) { }

  ngOnInit(): void {
    this.newUser();
  }

  createUser() {
    this.userService.createUser(this.userForm.value).subscribe((responese) => {
      this.newUser();
      this._location.back();
    });
  }

  newUser() {
    this.userService.getAllUSer().subscribe((response) => {
      this.allUser = response
    })
  }
}

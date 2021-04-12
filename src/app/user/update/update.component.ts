import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { User } from '../model/user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    pid: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{11}$")]),
    mobNum: new FormControl('', [Validators.required, Validators.pattern("^[0-8]{9}$")]),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    gender: new FormControl('კაცი'),
  })
  constructor(private http: UserService, private router: ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
    this.editUser(this.router.snapshot.params.id);
  }

  editUser(id: User) {
    this.http.editUser(id).subscribe((result: any) => {
      this.userForm = new FormGroup({
        id: new FormControl(result['id']),
        name: new FormControl(result['name']),
        lastName: new FormControl(result['lastName']),
        pid: new FormControl(result['pid']),
        mobNum: new FormControl(result['mobNum']),
        country: new FormControl(result['country']),
        city: new FormControl(result['city']),
        address: new FormControl(result['address']),
        gender: new FormControl(result['gender']),
      })
    })
  }

  updateUser() {
    this.http.updateUser(this.router.snapshot.params.id,this.userForm.value).subscribe(() => {
      this._location.back();
    })
  }
}

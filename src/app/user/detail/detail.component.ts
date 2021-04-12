import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  user: any
  id = this.router.snapshot.params.id
  constructor(private http: UserService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.detailUser(this.id)
  }

  detailUser(id: User) {
    this.http.editUser(id).subscribe((result: any) => {
      this.user = result;
    })
  }



}

import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../model/user.model';
import { UserService } from '../user.service';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  allUser: Object = Object;
  

  ELEMENT_DATA: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'lastName', 'mobNum', 'pid', 'country', 'action'];
  dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);
  selectedRow: any;
  pageIndex: any = 1;
  pageSize: any = 5;
  // this length params is manual because service dont have support
  length = 50;

  userForm = new FormGroup({
    id: new FormControl(),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    pid: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{11}$")]),
    mobNum: new FormControl('', [Validators.required, Validators.pattern("^[0-8]{9}$")]),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    gender: new FormControl('კაცი'),
  });

  pageEvent!: PageEvent;
  
  constructor(private http: UserService) { }

  ngOnInit(): void {
    this.fillUser(null);
  }

  ngAfterViewInit(): void {
  }

  fillUser(event:any) {
    if (event){
      this.pageIndex = event?.pageIndex;  
    } else {
      this.pageIndex = 1; 
    }
    this.http.getUsers(this.pageIndex,this.pageSize).subscribe((result: any) => {        
      this.dataSource.data = result as User[];  
    });
  }

  newUser() {
    this.http.getAllUSer().subscribe((response) => {
      this.allUser = response
    })
  }

  deleteUser(id: User) {
    this.http.deleteUser(id).subscribe(() => {
      this.fillUser(null);
    })
  }

  onRowClicked(row: User) {
    this.selectedRow = row;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

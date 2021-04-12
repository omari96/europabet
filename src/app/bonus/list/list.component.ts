import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BonusService } from '../bonus.service';
import { Bonus } from '../model/bonus.model';

@Component({
  selector: 'bonus-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  ELEMENT_DATA: Bonus[] = [];
  displayedColumns: string[] = ['id', "userId", 'bonusType', 'bonusQuantity', 'currency', 'action'];
  dataSource = new MatTableDataSource<Bonus>(this.ELEMENT_DATA)

  id = this.router.snapshot.params.id

  constructor(private http: BonusService, private router: ActivatedRoute,) { }

  ngOnInit(): void {
    this.fillBonus();
  }

  fillBonus() {
    this.http.getBonus(this.id).subscribe((responseData: any) => {
      this.dataSource.data = responseData as Bonus[];
    });
  }

  deleteBonus(id: Bonus) {
    this.http.deleteBonus(id).subscribe(() => {
      this.fillBonus();
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BonusService } from '../bonus.service';
import { Location } from '@angular/common';

@Component({
  selector: 'bonus-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class BonusAddComponent implements OnInit {
  allBonus: Object = Object;

  bonusForm = new FormGroup({
    userId: new FormControl(this.router.snapshot.params.id, Validators.required),
    bonusType: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    bonusQuantity: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
  });
  toppings = new FormControl();
  formValue = this.bonusForm.value
  currencyList: string[] = ["GEL", "USD"];
  toppingList: string[] = ["Freespin", "Freebet", "Money"];
  constructor(private http: BonusService, private router: ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
  }

  createBonus() {
    this.http.createBonus(this.router.snapshot.params.id, this.bonusForm.value).subscribe((responese) => {
      this.formValue = responese
      this.newBonus();
      this._location.back();
    });
  }

  newBonus() {
    this.http.getBonus(this.router.snapshot.params.id).subscribe((response) => {
      this.allBonus = response
    })
  }


}

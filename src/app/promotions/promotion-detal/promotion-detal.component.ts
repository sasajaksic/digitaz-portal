import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-promotion-detal',
  templateUrl: './promotion-detal.component.html',
  styleUrls: ['./promotion-detal.component.scss'],
})
export class PromotionDetalComponent implements OnInit {
  newPromotion: any;

  valid: any;

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.newPromotion = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  showSuccess() {
    this.toastr.success('Valid!', 'Valid input!');
  }

  showUnsuccess() {
    this.toastr.error('Invalid!', 'Invalid input!');
  }

  onSubmit(): void {
    this.valid = this.newPromotion.controls.name.valid;

    if (this.valid) {
      this.showSuccess();
    } else {
      this.showUnsuccess();
    }
  }
}

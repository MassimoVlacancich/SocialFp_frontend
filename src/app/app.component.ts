import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SocialfpReportService } from './services/socialfp-report.service';
import { COMPANIES, Company } from './data/companies'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  reportRequestForm: FormGroup;
  companies: Company[] = COMPANIES
  reportRequested = false;
  submitText = 'Get my report';

  constructor(private reportService: SocialfpReportService,
              private formBuilder: FormBuilder){ }

  ngOnInit() {

    this.reportRequestForm = this.formBuilder.group({
      email: ['', [Validators.email]],
      company: ['', Validators.required]
    });

  }

  test(){
    this.reportService.testBackend().subscribe(response => {
      console.log(JSON.stringify(response.response))
    })
  }


  submitReportRequest(event){

    if (this.reportRequestForm.valid) {
      const request = {
        email: this.email.value,
        ticker: this.company.value.ticker
      }
      console.log(JSON.stringify(request))
      this.reportRequested = true;
      this.submitText = 'Check your email'
      this.reportService.submitReportRequest(request).subscribe( response => {
        console.log(JSON.stringify(response.result))
      })
    } else{
      // Touch all form inputs to raise validation errors
      for (const formControl in this.reportRequestForm.controls) {
        if (this.reportRequestForm.controls.hasOwnProperty(formControl)) {
          this.reportRequestForm.controls[formControl].markAsTouched();
        }
      }
    }
  }

  resetSubmitButton(){
    if(this.reportRequested){
      this.reportRequested = false;
      this.submitText = 'Get my report';
    }
  }

  get email(): FormControl {
    return this.reportRequestForm.get('email') as FormControl;
  }

  get company(): FormControl {
    return this.reportRequestForm.get('company') as FormControl;
  }


}


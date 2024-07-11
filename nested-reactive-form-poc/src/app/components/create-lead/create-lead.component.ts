import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Lead } from 'src/app/models/lead';
import { LeadService } from 'src/app/services/lead.service';

@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.css']
})
export class CreateLeadComponent implements OnInit {

  leadForm!: FormGroup;

  constructor(private fb: FormBuilder, private leadService: LeadService) { }

  ngOnInit(): void {
    this.leadForm = this.fb.group({
      leadType: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onLeadTypeChange(): void {
    debugger
    if (this.leadForm.get('leadType')?.value === 'individual') {
      this.leadForm.addControl('personName', new FormControl('', Validators.required));
      this.leadForm.addControl('age', new FormControl(null, Validators.required));
      this.leadForm.removeControl('companyName');
      this.leadForm.removeControl('location');
    } else {
      this.leadForm.addControl('companyName', new FormControl('', Validators.required));
      this.leadForm.addControl('location', new FormControl('', Validators.required));
      this.leadForm.removeControl('personName');
      this.leadForm.removeControl('age');
    }
  }

  onSubmit(): void {
    debugger
    if (this.leadForm.valid) {
      this.leadService.createLead(this.leadForm.value as Lead);
    }
  }

}

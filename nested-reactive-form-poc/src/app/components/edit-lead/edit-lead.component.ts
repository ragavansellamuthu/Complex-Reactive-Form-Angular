import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Lead } from 'src/app/models/lead';
import { LeadService } from 'src/app/services/lead.service';

@Component({
  selector: 'app-edit-lead',
  templateUrl: './edit-lead.component.html',
  styleUrls: ['./edit-lead.component.css']
})
export class EditLeadComponent implements OnInit {

  leadForm !: FormGroup ;

  constructor(private activateRoute : ActivatedRoute , private formBuilder : FormBuilder , private leadService : LeadService) {}

  ngOnInit(){
    let lead : Lead = new Lead() ;
    let leadId =  this.activateRoute.snapshot.paramMap.get('leadId');
    this.leadService.getLead(leadId).subscribe({
      next : (leadData) => {
        lead = leadData ;
      },
      complete : () => {

        this.leadForm = this.formBuilder.group({
          leadId : [lead.leadId],
          leadType : new FormControl({ value:lead.leadType , disabled : true}),
          country : [lead.country,Validators.required]
        });

        if(lead.leadType === 'individual') {
          this.leadForm.addControl('personName', new FormControl(lead.personName, Validators.required));
          this.leadForm.addControl('age', new FormControl(lead.age, Validators.required));
        } else if(lead.leadType === 'company') {
          this.leadForm.addControl('companyName', new FormControl(lead.companyName, Validators.required));
          this.leadForm.addControl('location', new FormControl(lead.location, Validators.required));
        }

      }
    });
  } 

  onSubmit() {
 debugger
    if (this.leadForm.valid) {
      this.leadService.updateLead(this.leadForm.value as Lead);
    }
  }

}

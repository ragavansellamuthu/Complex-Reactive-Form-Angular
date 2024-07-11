import { Injectable } from '@angular/core';
import { Lead } from '../models/lead';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor() { }

  createLead(lead:Lead){
    console.log(lead);
  }

  getLead(id:any) : Observable<Lead>{
    let lead : Lead = new Lead() ; 
    if(id==1){
      lead = {
        leadId: 1,
        leadType: 'individual',
        country: 'Germany',
        personName: 'Jhonny',
        age: 24,
        companyName: '',
        location: ''
      }
    } else {
      lead = {
        leadId: 2,
        leadType: 'company',
        country: 'India',
        personName: '',
        age: 0,
        companyName: 'Softtwig',
        location: 'Chennai'
      }
    }
    return of (lead) ;
  }

  updateLead(lead:Lead){
    console.log(lead);
  }

}

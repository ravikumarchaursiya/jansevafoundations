import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { Observable, of, Subject, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  host= environment.config.apiUrl
  tokenData;
    constructor(private router: Router,private fb: FormBuilder,
      private route:ActivatedRoute,private location: Location, private http:HttpClient ) { 
        this.setTokenData()
    }

    setTokenData() {
     return this.tokenData = localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null;
    }
    getTokenData() {
      return this.tokenData;
    }
    getUsreNameRole() {
      if (this.tokenData) {
        if (this.tokenData?.role) {
          return this.tokenData?.role;
        } else {
          return false;
        }
      }
      return false; // or another default value
    }
    getUserName(){
      if(this.tokenData){
        return this.tokenData?.sub;
      }else{
        return null;
      }
    }
    getStateName(){
      if(this.tokenData){
        return this.tokenData?.stateName;
      }else{
        return null;
      } 
    }
    
  nullCheckObj(obj) {
    const newObj: any = {};
    for (const [key, value] of Object.entries(obj)) {
      if (obj[key] !== null && obj[key] !== undefined
        && obj[key] !== 'null' && obj[key] !== 'undefined'
        && obj[key] !== '' && obj[key] !== 'NA') {
        newObj[key] = value;
      }
    }
    return newObj;
  }

  checkArray(val) {
    return Array.isArray(val) ? val :
      typeof (val) === 'string' ? Array.isArray(this.checkJSONStringified(val)) ?
        JSON.parse(val) : [] : [];
  }

  checkJSONStringified(data: string) {
    let obj = {};
    try {
      obj = JSON.parse(data)
    } catch {
      obj = {};
    }
    return obj;
  }

  isEmptyObject(obj) {
    if (!Object.getOwnPropertySymbols(obj).length && !Object.getOwnPropertyNames(obj).length) {
      return true;
    }
    return false;
  }

  removeValidations(control: FormControl | AbstractControl) {
    control.clearValidators();
    control.updateValueAndValidity();
  }
  setControlsRequired(controls: FormControl[] | AbstractControl[], enable = true) {
    controls.forEach(control => {
      if (enable) { control.enable(); }
      control.setValidators(Validators.required);
      control.updateValueAndValidity();
    });
  }
  removeRequired(controls: FormControl[] | AbstractControl[]) {
    controls.forEach(control => {
      control.clearValidators();
      control.updateValueAndValidity();
    });
  }
  clearControls(control: FormControl[] | AbstractControl[]) { control.forEach(i => i.reset()); }
  updateControls(control: FormControl[] | AbstractControl[]) { control.forEach(i => i.updateValueAndValidity()); }

  enableControls(control: FormControl[] | AbstractControl[]) { control.forEach(i => i.enable()); }
  disableControls(control: FormControl[] | AbstractControl[]) { control.forEach(i => i.disable()); }

  setFormArrayValue(arr: FormArray, initGroup, data: Array<any>) {
    for (let i = 1; i <= data.length - 1; i++) {
      arr.push(initGroup());
    }
    arr.patchValue(data);
  }

  findInvalidControls(form: FormGroup | FormArray): string[] {
    const invalid: string[] = [];
    const recursiveFunc = (form: FormGroup | FormArray) => {
      Object.keys(form.controls).forEach(field => {
        const control = form.get(field);
        if (control.invalid) { invalid.push(field); }
        if (control instanceof FormGroup) {
          recursiveFunc(control);
        } else if (control instanceof FormArray) {
          recursiveFunc(control);
        }
      });
    };
    recursiveFunc(form);
    return invalid;
  }

  scrollToError(): void {
    const errorElements = document.querySelector('.ng-invalid:not(form), .error');
    if (errorElements) { this.scrollTo(errorElements); }
  }
  scrollTo(el: Element): void {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  setAsTouched(group: FormGroup | FormArray) {
    group.markAsTouched();
    for (const i in group.controls) {
      if (group.controls[i] instanceof FormControl) {
        group.controls[i].markAsTouched();
      } else {
        this.setAsTouched(group.controls[i]);
      }
    }
  }

  clearFormArray(arr: FormArray) { while (arr.length !== 0) { arr.removeAt(0); } }

  private dataSubject = new BehaviorSubject<string>(''); // Replace string with your data type
  data$ = this.dataSubject.asObservable();
  setData(data: string) { // Replace string with your data type
    this.dataSubject.next(data);
  }
  convertFieldToNumber(fieldName: string, formGroup: FormGroup) {
    const control = formGroup.get(fieldName);
    if (control && control.value !== '') {
      control.setValue(parseInt(control.value, 10));
    }
  }
  convertFieldToDecimal(fieldName: string, formGroup: FormGroup): void {
    const control = formGroup.get(fieldName);
    if (control && control.value) {
      const value = parseFloat(control.value);
      control.setValue(isNaN(value) ? null : value);
    }
  }
  // pass parameter emit event 
  convertFieldToDecimals(controlName: string, formGroup: FormGroup, options: any = {}) {
    const control = formGroup.get(controlName);
    if (control) {
      const value = parseFloat(control.value).toFixed(3); // Assuming you want to convert to decimal with 2 decimal places
      control.setValue(value, options);
    }
  }
  
  back(){
    this.location.back();
  }


  
}


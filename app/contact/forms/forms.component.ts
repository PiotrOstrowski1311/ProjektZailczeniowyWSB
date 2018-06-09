import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({

  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent implements OnInit {
  imie: string;
  nazwisko: string;
  mail: string;

  constructor( 
    public dialog: MatDialog,
    public formBuilder : FormBuilder
     ) {}
  


     openDialog() {
      //console.log('---openDialog',content.value);
      let fileNameDialogRef = this.dialog.open(DialogPickup, {
        width: '550px',
        data: {
          imie: this.imie,
          nazwisko: this.nazwisko,
          mail: this.mail }
      });
  
  
    }


  modelForm: FormGroup;

  formErrors = {
    imie: '',
    nazwisko: '',
    mail: '',
    temat: '',
    tresc: ''
  }

  validationMessages = {
    imie: {
      required: 'Imie wymagane',
      minlength: 'Minimum 3 znaki'
    },
    nazwisko: {
      required: 'Nazwisko wymagane',
      minlength: 'Minimum 3 znaki'
    },
    mail: {
      required: 'adres e-mail wymagany',
      email: 'niepoprawny adres email'
    },
    temat: {
      required: 'temat wymagany'
    }
  }


  onChangeValue() {
    const form = this.modelForm;
    this.imie = form.controls.imie.value;
    this.nazwisko = form.controls.nazwisko.value;
    this.mail = form.controls.mail.value;
    
    //pole = imie, nazwisko, mail
    for (let pole in this.formErrors) {
      this.formErrors[pole] = '';
      let control = form.get(pole);
      //console.log('----control',control);
      //control - kolejno każdy input ze stanami dirty, valid i errors wartosci
      //required, minLenght z validators 
      
      //console.log('------validationMessages',this.validationMessages);
      if (control && control.dirty && !control.valid) {
        const validationMessages = this.validationMessages[pole];
        for (const key in control.errors) {
          this.formErrors[pole] += validationMessages[key] + ' ';
        }
      }
    }
  }

    


  onSubmit(form) : void {
    console.log('---------- form value', form.value);


  
  }



  ngOnInit() : void {
    
    this.modelForm = this.formBuilder.group({
      imie: ['Jan',[Validators.minLength(3),  Validators.required]],
      nazwisko: ['Kowalski', [Validators.minLength(3),  Validators.required]],
      mail: ['jan.kowalski@domena.pl', [Validators.required, Validators.email]],
      temat: ['Temat', [ Validators.required]],
      tresc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Error, quis praesentium quas nisi nulla itaque dolorum, enim dolorem reiciendis accusamus corporis
       aliquid vero dolores impedit repellat nostrum provident est eveniet.`
    });

    this.modelForm.valueChanges.subscribe((value) => {
      this.onChangeValue();
      // console.log(this.modelForm.status);
      // console.log('------modelForm value', this.modelForm.value);
    });
   
    this.onChangeValue();


  }

}


@Component({
  selector: 'dialog-pickup',
  templateUrl: 'dialog-pickup.html',
})


export class DialogPickup {

  constructor(
    public dialogRef: MatDialogRef<DialogPickup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

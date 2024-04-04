import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      message: [null, [Validators.required]],
      nom: [null, [Validators.required]],
      objet: [null, [Validators.required]],
      prenom: [null],
      telephone: [null],
    });
  }

  onSubmitForm() {
    console.log(this.contactForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.scss']
})
export class AgregarEditarMascotaComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      color: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  agregarMascota(){
    console.log("agregar mascota")
  }

}

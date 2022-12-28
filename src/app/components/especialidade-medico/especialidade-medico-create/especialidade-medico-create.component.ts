import { EspecialidadeMedico } from './../especialidade-medico.model';
import { Component, OnInit } from '@angular/core';
import { EspecialidadeMedicoService } from '../especialidade-medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidade-medico-create',
  templateUrl: './especialidade-medico-create.component.html',
  styleUrls: ['./especialidade-medico-create.component.css']
})
export class EspecialidadeMedicoCreateComponent implements OnInit{
  
  especialidadeMedico: EspecialidadeMedico = {
    idMedico: null,
    idEspecialidade: null
  }
  
  constructor(private especialidadeMedicoService: EspecialidadeMedicoService, private router: Router){}

  ngOnInit(): void {
    
  }
  
  createEspecialidadeMedico(): void {
    this.especialidadeMedicoService.create(this.especialidadeMedico).subscribe( () => {
      this.especialidadeMedicoService.showMessage('Especialidade criada!')
      this.router.navigate(['/especialidade-medico']);
    })
  }
  cancel(): void {
    this.router.navigate(['/especialidade-medico'])
  }
}

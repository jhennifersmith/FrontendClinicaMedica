import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { ClienteSearchComponent } from './cliente-search/cliente-search.component';
import { ClienteCrudComponent } from './../../views/cliente-crud/cliente-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClienteService } from 'src/app/modules/agendamentos/services/cliente.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { MatSelectModule } from '@angular/material/select';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from 'ngx-mask'


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule,
        MatRadioModule,
        ClienteRoutingModule,
        MatSelectModule,
        NgxMaskDirective, NgxMaskPipe
    ],
    exports: [],
    declarations: [
        ClienteCrudComponent,
        ClienteSearchComponent,
        ClienteDeleteComponent,
        ClienteFormComponent,
    ],
    providers: [ClienteService, provideNgxMask()],
})

export class ClienteModule { }
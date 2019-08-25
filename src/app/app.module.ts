import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatDividerModule, MatSnackBarModule, MatTableModule  } from '@angular/material';

import { IssueService } from './issue.service';

const routes:Routes = [
{path: 'create', component: CreateComponent},
{path: 'list', component: ListComponent},
{path: 'edit/:id', component: EditComponent},
{path: '', redirectTo: 'list', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
     HttpClientModule,
    MatToolbarModule,
     MatFormFieldModule, 
     MatInputModule, 
     MatOptionModule, 
     MatSelectModule, 
     MatIconModule, 
     MatButtonModule, 
     MatCardModule, 
     MatDividerModule, 
     MatSnackBarModule,
     MatTableModule,
     ReactiveFormsModule 
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }

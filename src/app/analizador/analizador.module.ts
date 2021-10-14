import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { RouterModule } from '@angular/router';
import { routes } from './analizador-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AnalizadorService } from './service/analizador.service';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MonacoEditorModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [
    AnalizadorService,
  ],
  bootstrap: [EditorComponent]
})
export class AnalizadorModule { }

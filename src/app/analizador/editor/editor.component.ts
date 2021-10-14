import { Component, OnInit } from '@angular/core';
import { AnalizadorService } from '../service/analizador.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  editorOptions = {theme: 'vs-dark', language: 'c'};
  code: string = 'int main() {\nint x;\n}';
  lexicoReponse ="";
  sintacticoResponse ="";
  isSintactico:boolean = true;

  constructor(
    private analizadorService:AnalizadorService
  ) { }

  ngOnInit(): void {
  }

  lexico(){
    const data = {
      texto:this.code
    }
    this.analizadorService.lexico(data).subscribe((response)=>{
      this.lexicoReponse = response.respuesta
      this.sintactica()
      console.log(response)
    })
  }

  sintactica(){
    const data = {
      texto:this.code
    }
    this.analizadorService.sintactico(data).subscribe((response)=>{
      this.sintacticoResponse = response.respuesta
      this.isSintactico = response.correcto
    })
  }

  limpiar(){
    this.code = "";
    this.lexicoReponse = "";
    this.sintacticoResponse = "";
  }
}

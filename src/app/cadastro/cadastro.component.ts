import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  sobrenome: string = '';
  dataNascimento: Date = new Date();
  telefone: string = '';
  email: string = '';
  endereco: string = '';
  bairro: string = '';
  cidade: string = '';
  atendimentoPlano: boolean = false; // Padrão para "Não"

  onSubmit() {
    const cadastro = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      dataNascimento: this.dataNascimento,
      telefone: this.telefone,
      email: this.email,
      endereco: this.endereco,
      bairro: this.bairro,
      cidade: this.cidade,
      atendimentoPlano: this.atendimentoPlano,
    };

    console.log(cadastro);
  }
}

import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  senha: string;

  constructor(public toastController: ToastController, private route: Router) {}

  ngOnInit() {}

  login() {
    this.route.navigateByUrl('/tabs/tab1');
    this.apresentarToast('Seja bem vindo!!!', 'success');
    if (this.email === 'admin@admin.com' && this.senha === 'admin') {
      this.route.navigateByUrl('/tabs/tab1');
      this.apresentarToast('Seja bem vindo!!!', 'success');
    } else {
      this.apresentarToast('Erro, usuário ou senha inválidos', 'danger');
    }
  }

  async apresentarToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000,
      color: cor,
    });
    toast.present();
  }
}

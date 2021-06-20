import { ISerie } from '../Models/ISerie.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  titulo: 'Vídeos App';
  listaSeries: ISerie[] = [
    {
      nome: 'Loki (2021)',
      duracao: '52m',
      classificacao: 81,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ukR0MkCQE6IylzBPd61txJi1L3E.jpg',
      generos: ['Drama', 'Sci-Fi', 'Fantasy'],
    },
    {
      nome: 'Lúcifer (2016)',
      duracao: '45m',
      classificacao: 85,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
      generos: ['Crime', 'Sci-Fi', 'Fantasy'],
    },
    {
      nome: 'The Flash (2014)',
      duracao: '44m',
      classificacao: 77,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
      generos: ['Drama', 'Sci-Fi', 'Fantasy'],
    },
    {
      nome: 'Falcão e o Soldado Invernal (2021)',
      duracao: '50m',
      classificacao: 78,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oF9njYCN6lBdrsi6wfulcxTggvn.jpg',
      generos: [
        'Sci-Fi',
        'Fantasy',
        'Action',
        'Adventure',
        'Drama',
        'War',
        'Politics',
      ],
    },
    {
      nome: 'Ragnarok (2020)',
      duracao: '45m',
      classificacao: 81,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg',
      generos: ['Drama', 'Sci-Fi', 'Fantasy', 'Mistério'],
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar a série',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Sim, favoritar!',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}

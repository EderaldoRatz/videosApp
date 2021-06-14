import { IGenero } from './../Models/IGenero.model';
import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeApi } from './../Models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../Models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  titulo = 'Filmes';
  listaVideos: IFilme[] = [
    {
      nome: 'Raya e o Último Dragão (2021)',
      lancamento: '04/03/2021',
      duracao: '1h 47m',
      classificacao: 82,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o2NTWpD6LVf1YyPKTdvcEuHqcJ6.jpg',
      generos: ['Animação', 'Aventura', 'Fantasia', 'Família', 'Ação'],
      pagina: '/raya',
    },
    {
      nome: 'Miraculous World: Xangai, a Lenda de Ladydragon (2021)',
      lancamento: '16/04/2021',
      duracao: '56m',
      classificacao: 79,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tf9nWFyJ745mBFkXZtPWabDYBR3.jpg',
      generos: ['Animação', 'Comédia', 'Família', 'Aventura'],
      pagina: '/miraculous',
    },
    {
      nome: 'Tom & Jerry: O Filme (2021)',
      lancamento: '11/02/2021',
      duracao: '1h 41m',
      classificacao: 79,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9NvYyM8H6d5KAVGqpyFV9YPO5cU.jpg',
      generos: ['Comédia', 'Família', 'Animação'],
      pagina: '/tom',
    },
    {
      nome: 'Soul (2020)',
      lancamento: '25/12/2020',
      duracao: '1h 40m',
      classificacao: 82,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg',
      generos: [
        'Família',
        'Animação',
        'Comédia',
        'Drama',
        'Música',
        'Fantasia',
      ],
      pagina: '',
    },
    {
      nome: 'Maggie Simpson em O Despertar com Força da Soneca (2021)',
      lancamento: '04/05/2021',
      duracao: '3m',
      classificacao: 68,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AomupwyaNdyry1sMHsRO5NmOUyx.jpg',
      generos: ['Família', 'Animação', 'Comédia', 'Ficção científica'],
      pagina: '',
    },
  ];

  listaFilmes: IListaFilmes;
  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router
  ) {}

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmeService.buscarFilmes(busca).subscribe((dados) => {
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }

  exibirFilme(filme: IFilmeApi) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme',
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
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  ngOnInit() {
    this.generoService.buscarGeneros().subscribe((dados) => {
      console.log('Generos: ', dados.genres);
      dados.genres.forEach((genero) => {
        this.generos[genero.id] = genero.name;
      });
    this.dadosService.guardarDados('generos', this.generos);

    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datas } from 'src/app/data/datas';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  @Input() photo      : string = 'https://imgs.search.brave.com/KMi832g1Ojg_VivhKrY8QPuy9912K9I9ETIIXdaCDig/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jYXBy/aWNoby5hYnJpbC5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDcvdG9u/eS1oYW5kLXVwZGF0/ZWQtcm9iZXJ0LWRv/d25leS1qci1ob21l/bS1kZS1mZXJyby5q/cGc';
  @Input() title      : string = 'Homem de Ferro 3';
  @Input() description: string = 'Novo lançamento';

  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"));
    this.setValuesComponent(this.id);
  }

  setValuesComponent(id: string | null){
    const result = datas.filter(article => article.id == id)[0]
     this.title       = result.title;
     this.description = result.description;
     this.photo       = result.photo;
  }
}

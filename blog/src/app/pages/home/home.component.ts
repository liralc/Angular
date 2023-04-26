import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public photo(): string{
    return 'https://imgs.search.brave.com/84eu8MxlP7qSo3-ZNNuFjZSnD_-dHmT7A7T9Ojfo5uY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMyLmFscGhhY29k/ZXJzLmNvbS85NzMv/OTczMzg1LmpwZw'
  }

  public title(): string{
    return 'Novo Homem de Ferro';
  }

  public description(): string{
    return 'allslslslslsslslls';
  }

  public photoSmall(): string{
    return 'https://imgs.search.brave.com/TSnTl-OLZegXgzTvNbSvjGnwKOPNXhyvp8X3xGGcLPI/rs:fit:1200:841:1/g:ce/aHR0cHM6Ly93d3cu/aGR3YWxscGFwZXIu/bnUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTcvMDEvbWFydmVs/LTkuanBn';
  }

  public descSmall(): string{
    return 'allslslslslsslslls';
  }

}

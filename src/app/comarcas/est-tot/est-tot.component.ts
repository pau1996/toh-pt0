import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { Comarca } from '../Comarca';
import { ComarcaMapper } from '../ComarcaMapper';
import { ComarcasService } from '../comarcas.service';

@Component({
  selector: 'app-est-tot',
  templateUrl: './est-tot.component.html',
  styleUrls: ['./est-tot.component.css'],
})
export class EstTotComponent implements OnInit {
  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;
  private dataMasc: number[] = [];
  private dataFem: number[] = [];
  private dataAll: number[] = [];
  private labels: string[] = [];
  private comarcas: Comarca[];

  constructor(private comarcasService: ComarcasService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.comarcasService.getComarcas().subscribe((respuesta) => {
      this.comarcas = ComarcaMapper.jsonToComarcaArray(respuesta);
      this.labels = this.comarcas.map((item) => item.name);
      this.dataMasc = this.comarcas.map((item) => item.pobMasc);
      this.dataFem = this.comarcas.map((item) => item.pobFem);
      this.dataAll = this.comarcas.map((item) => item.pobTotal);
      this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Masculino',
              data: this.dataMasc,
              fill: true,
              backgroundColor: '#337ab7',
              borderWidth: 1,
            },
            {
              label: 'Femenino',
              data: this.dataFem,
              fill: true,
              backgroundColor: '#db9ac3',
              borderWidth: 1,
            },
            {
              label: 'Total',
              data: this.dataAll,
              fill: true,
              backgroundColor: '#1c1b19',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: false,
        },
      });
    });
  }
}

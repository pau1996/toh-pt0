import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { Comarca } from '../Comarca';
import { ComarcaMapper } from '../ComarcaMapper';
import { ComarcasService } from '../comarcas.service';

@Component({
  selector: 'app-est-fem',
  templateUrl: './est-fem.component.html',
  styleUrls: ['./est-fem.component.css'],
})
export class EstFemComponent implements OnInit {
  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;
  private data: number[] = [];
  private labels: string[] = [];
  private comarcas: Comarca[];

  constructor(private comarcasService: ComarcasService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.comarcasService.getComarcas().subscribe((respuesta) => {
      this.comarcas = ComarcaMapper.jsonToComarcaArray(respuesta);
      this.labels = this.comarcas.map((item) => item.name);
      this.data = this.comarcas.map((item) => item.pobFem);
      this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Femenino',
              data: this.data,
              fill: true,
              backgroundColor: '#db9ac3',
              borderWidth: 1,
            },
          ],
        },
        options: {
          legend: {
            onClick: (e) => e.stopPropagation(),
          },
          responsive: false,
        },
      });
    });
  }
}

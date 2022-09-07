import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';




const listMascotas: Mascota[] = [
    { nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'dorado', peso: 30 }
];

@Component({
    selector: 'app-listado-mascota',
    templateUrl: './listado-mascota.component.html',
    styleUrls: ['./listado-mascota.component.scss']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {

    displayedColumns: string[] = ['Nombre', 'edad', 'raza', 'color', 'peso', 'acciones'];
    dataSource = new MatTableDataSource<Mascota>(listMascotas);

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor() { }

    ngOnInit(): void {
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();


    }

}

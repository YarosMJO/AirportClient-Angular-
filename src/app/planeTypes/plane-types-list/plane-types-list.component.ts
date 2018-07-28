import { Component, OnInit } from '@angular/core';
import { PlaneType } from '../../Models/PlaneType';
import { PlaneTypeService } from '../../Services/planeType.service';

@Component({
  selector: 'app-planeTypes-list',
  templateUrl: './plane-types-list.component.html',
  styleUrls: ['./plane-types-list.component.css'],
  providers: [PlaneTypeService]
})
export class PlaneTypesListComponent implements OnInit {

  PlaneTypes: Array<PlaneType>;

  public Model: string;
  public SeatsCapacity: number;
  public Carrying: number;
  public LifeTime: Date;

  constructor(public service: PlaneTypeService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((items:Array<PlaneType>) => {
      this.PlaneTypes = items; });
  }

  add(){
    let item = new PlaneType(this.Model,this.Carrying,this.SeatsCapacity,this.LifeTime);
    this.service.add(item).subscribe(result=>{
      this.PlaneTypes.push(item);
      this.getAll();
    });
  }

  delete(id: number): void {
    this.service.delete(id).subscribe( result => {
      this.getAll();
    });   
  }

   update(id:number,item: PlaneType){
    this.service.update(id,item).subscribe(result=>{
      this.getAll();
    });
  }
}

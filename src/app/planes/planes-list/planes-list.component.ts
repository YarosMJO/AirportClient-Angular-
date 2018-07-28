import { Component, OnInit } from '@angular/core';
import { Plane } from '../../Models/Plane';
import { PlaneService } from '../../Services/plane.service';
import { PlaneType } from '../../Models/PlaneType';

@Component({
  selector: 'app-planes-list',
  templateUrl: './planes-list.component.html',
  styleUrls: ['./planes-list.component.css']
})
export class PlanesListComponent implements OnInit {

  Planes: Array<Plane>;

  public Name: string;
  public ReleaseDate: Date;
  public LifeTime: Date;

  public defPlane:PlaneType;

  constructor(public service: PlaneService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((items:Array<Plane>) => {
      this.Planes = items; });
  }

  add(){
     this.defPlane = new PlaneType("B-1",4,4,new Date());
    let item = new Plane(this.Name,this.defPlane,this.ReleaseDate,this.LifeTime);
    this.service.add(item).subscribe(result=>{
      this.Planes.push(item);
      this.getAll();
    });
  }

  delete(id: number): void {
    this.service.delete(id).subscribe( result => {
      this.getAll();
    });   
  }

   update(id:number,item: Plane){
    this.service.update(id,item).subscribe(result=>{
      this.getAll();
    });
  }
}

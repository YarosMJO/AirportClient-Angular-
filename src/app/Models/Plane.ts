import { PlaneType } from "./PlaneType";

export class Plane {
  constructor(
    public Name: string,
    public Type: PlaneType,
    public ReleaseDate: Date,
    public LifeTime: Date) { }
}

import { Crew } from "./Crew";
import { Plane } from "./Plane";

export class Departure{
  constructor(
    public FlightNumber: number,
    public DepartureDate: Date,
    public Crew: Crew,
    public Plane: Plane) { }
}

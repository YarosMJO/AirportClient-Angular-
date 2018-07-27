import { FlightAttendant } from "./FlightAttendant";
import { Pilot } from "./Pilot";

export class Crew {
  constructor(
    public Pilot: Pilot,
    public FlightAttendants: Array<FlightAttendant> ) { }
}

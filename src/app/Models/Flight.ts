import { Ticket } from "./Ticket";

export class Flight {
  constructor(
    public DeparturePoint: string,
    public DepartureTime: Date,
    public Destination: string,
    public ArrivalTime: Date,
    public Tickets: Array<Ticket>) { }
}
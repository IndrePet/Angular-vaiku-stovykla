export class Register {
  public id: string | null = null;
  constructor(
    public name: string,
    public birthYear: string,
    public gender: string,
    public email: string,
    public phoneNumber: string,
    public grade: number
  ) {}
}

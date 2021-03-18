export class Comarca {
  private _name: string;
  private _pobMasc: number;
  private _pobFem: number;
  private _pobTotal: number;

  constructor();

  constructor(
    name?: string,
    pobMasc?: number,
    pobFem?: number,
    pobTotal?: number
  ) {
    this._name = name;
    this._pobMasc = pobMasc;
    this._pobFem = pobFem;
    this._pobTotal = pobTotal;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get pobMasc(): number {
    return this._pobMasc;
  }
  public set pobMasc(value: number) {
    this._pobMasc = value;
  }

  public get pobFem(): number {
    return this._pobFem;
  }
  public set pobFem(value: number) {
    this._pobFem = value;
  }

  public get pobTotal(): number {
    return this._pobTotal;
  }
  public set pobTotal(value: number) {
    this._pobTotal = value;
  }
}

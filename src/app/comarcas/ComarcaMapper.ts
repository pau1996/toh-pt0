import { Comarca } from './Comarca';

export class ComarcaMapper {
  public static jsonToComarcaArray(jsonObject: any): Comarca[] {
    let entryArray: any[];
    let comarcas: Comarca[] = [];
    if (jsonObject.feed.entry) {
      entryArray = jsonObject.feed.entry;
      entryArray.forEach((entry) => {
        let comarca = new Comarca();
        comarca.name = entry.title;
        entry['cross:DataSet']['cross:Section']['cross:Obs'].forEach(
          (element) => {
            if (element.SEX === 'M') {
              comarca.pobMasc = element.OBS_VALUE;
            }
            if (element.SEX === 'F') {
              comarca.pobFem = element.OBS_VALUE;
            }
            if (element.SEX === 'T') {
              comarca.pobTotal = element.OBS_VALUE;
            }
          }
        );
        comarcas.push(comarca);
      });
    }
    return comarcas;
  }
}

import WineData from '../../Wine-Data.json';

 export const ColorintensityArray=[];
 export const HueArray=[];

// Creating results for filter Alcohal 1, 2 & 3
 export const result1 = WineData
 .filter(item => item.Alcohol === 1)
 .map(item => [item.Hue, item['Color intensity']]);

 export const result2 = WineData
 .filter(item => item.Alcohol === 2)
 .map(item => [item.Hue, item['Color intensity']]);

 export const result3 = WineData
 .filter(item => item.Alcohol === 3)
 .map(item => [item.Hue, item['Color intensity']]);

 const alcoholdata = WineData.map(alco => 'A'+alco.Alcohol);
// Create an array of the Alcohal
const alcoholArray = [...alcoholdata];
export { alcoholArray };
// console.log(alcoholArray)

const MallicAcidData = WineData.map(alco => alco['Malic Acid']);
const MallicAcidArray = [...MallicAcidData];
export { MallicAcidArray };
// console.log(MallicAcidArray);

const AshArrayData = WineData.map(alco => alco.Ash);
const AshArray = [...AshArrayData];
export { AshArray };

const AlcanityofAshData = WineData.map(alco => alco['Alcalinity of ash']);
const AlcanityofAshArray = [...AlcanityofAshData];
export { AlcanityofAshArray };
// console.log(AlcanityofAshArray);

const MagnesiumData = WineData.map(alco => alco.Magnesium);
const MagnesiumArray = [...MagnesiumData];
export { MagnesiumArray };
// console.log(MagnesiumArray);

const TotalPhenolsData = WineData.map(alco => alco['Total phenols']);
const TotalPhenolsArray = [...TotalPhenolsData];
export { TotalPhenolsArray };
// console.log(TotalPhenolsArray);

const FlavanoidsData = WineData.map(alco => alco.Flavanoids);
const FlavanoidsArray = [...FlavanoidsData];
export { FlavanoidsArray };
// console.log(FlavanoidsArray);

const NonflavanoidphenolsData = WineData.map(alco => alco['Nonflavanoid phenols']);
const NonflavanoidphenolsArray = [...NonflavanoidphenolsData];
export { NonflavanoidphenolsArray };
// console.log(NonflavanoidphenolsArray);

const ProanthocyaninsData = WineData.map(alco => alco.Proanthocyanins);
const ProanthocyaninsArray = [...ProanthocyaninsData];
export { ProanthocyaninsArray };
// console.log(ProanthocyaninsArray);

const DilutedwinesData = WineData.map(alco => alco['OD280/OD315 of diluted wines']);
const DilutedwinesArray = [...DilutedwinesData];
export { DilutedwinesArray };
// console.log(DilutedwinesArray);

const UnknownData = WineData.map(alco => alco.Unknown);
const UnknownArray = [...UnknownData];
export { UnknownArray };
// console.log(UnknownArray);

const FetchJSONdata = () => {

  return (
    // <div className="fetch-data">
    //   <div className="posts">
    //     <h2>Ash</h2>
    //     {AshArray.map((Ash, index) => {
    //       return (
    //         <div className="fetched" key={index}>
    //           {Ash}
    //         </div>
    //       )
    //     })}
    //     <h2>Alcohol</h2>
    //     {alcoholArray.map((alcohol, index) => {
    //       return (
    //         <div className="fetched" key={index}>
    //           {alcohol}
    //         </div>
    //       )
    //     })}
    //     <h2>Malic Acid</h2>
    //     {MallicAcidArray.map((malic, index) => {
    //       return (
    //         <div className="fetched" key={index}>
    //           {malic}
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
    null
  )
}

export default FetchJSONdata;

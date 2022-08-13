import { cssSpace, cssSun, cssPlanet } from './style';

const Solar = ({totalPlanet}) => {

  // console.log(totalPlanet);
  const planets = [];
  for (let index = 0; index < totalPlanet; index++) {
    planets.push(index);
  }

  console.log(planets);

  return (
    <div className={cssSpace}>
      {/* <div className={cssSun}/> */}
      {/* answer */}
      <div className={cssSun}>
        {
          planets.map((item, index) => {
            return(
              <div key={index} className={cssPlanet()} planet={item} />
            )
          })
        }
      </div>
    </div>
  )
};

export default Solar;

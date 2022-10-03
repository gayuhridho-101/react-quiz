import { keyframes } from 'emotion';
import { cssSpace, cssSun, cssOrbit, cssPlanet } from './style';

const Solar = ({totalPlanet}) => {

  const planets = [];
  for (let index = 0; index < totalPlanet; index++) {
    planets.push(index);
  }
  
  const  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const spin = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

  return (
    <div className={cssSpace}>
      <div className={cssSun}>
        {
          planets.map((item, index) => {
            return(
              <div key={index} className={cssOrbit} style={{animation: `${spin} ${(index + 1 * 2 )}s linear infinite`}} planet={item}>
                <div className={cssPlanet} style={{top: `${(index + 1) * 50}px`, backgroundColor: getRandomColor()}}></div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Solar;

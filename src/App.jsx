import React from 'react'
import Beams from './components/Beams'
import SplitText from "./components/SplitText"

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

function App() {
  return (
    <>
      <div className='w-full h-screen relative bg-black flex justify-center items-center'>
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffffff"
            speed={9}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div className='absolute flex flex-col justify-center items-center'>
          <h1 className='text-white font-bold mb-10'>
            <SplitText
              text="Bitely"
              className="text-7xl font-semibold text-center"
              delay={100}
              duration={2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 1, y: 100 }}
              to={{ opacity: 1, y: -8 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>
        </div>
      </div>

    </>

  );
}
export default App;

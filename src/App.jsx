import React from 'react'
import Beams from './components/Beams'
import SplitText from "./components/SplitText"
import Stepper, { Step } from './components/Stepper';

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
        <div className="absolute flex flex-col justify-center items-center">
          <h1 className="text-white font-bold mb-25">
            <SplitText
              text="Bitely"
              className="text-7xl font-semibold text-center"
              delay={100}
              duration={2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 1, y: 100 }}
              to={{ opacity: 1, y: -11 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <div className="mt-4">
            <Stepper
              initialStep={1}
              onStepChange={(step) => {
                console.log(step);
              }}
              onFinalStepCompleted={() => console.log("All steps completed!")}
              backButtonText="Previous"
              nextButtonText="Next"
            >
              <Step>
                <h2 style= {{color: "white", fontWeight: "600"}}>Welcome to the Bitely, pick a food to find its recipe!</h2>
                <p style= {{color: "white", fontWeight: "600"}}></p>
              </Step>
              {/* <Step>
                <h2 style= {{color: "white", fontWeight: "600"}}>Step 2</h2>
                <img
                  style={{
                    height: "100px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center 0px",
                    borderRadius: "15px",
                    marginTop: "1em",
                  }}
                  src="https://www.hollywoodreporter.com/wp-content/uploads/2025/01/GettyImages-1397428228-H-2025.jpg?w=1296&h=730&crop=1"
                />
                <p style= {{color: "white", fontWeight: "600", paddingTop: "10px"}}>Click next!</p>
              </Step> */}
              <Step>
                <h2 style= {{color: "white", fontWeight: "600"}}>Enter a recipe!</h2>
                <input style= {{color: "white", fontWeight: "400"}}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="What sounds tasty?"
                />
              </Step>
              <Step>
                <h2 style= {{color: "white", fontWeight: "600"}}>Final Step</h2>
                <p style= {{color: "white", fontWeight: "600"}}>You made it!</p>
              </Step>
            </Stepper>
          </div>
        </div>
      </div>
    </>

  );
}
export default App;

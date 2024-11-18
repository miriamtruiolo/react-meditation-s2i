import React from "react";
import soundData from "../../data/soundTrackData.js";
import SoundItem from "./SpundItem";

interface SoundsGridProps {
    isStopped: boolean;          
    setIsStopped: (value: boolean) => void;  
  }
  
  const SoundsGrid: React.FC<SoundsGridProps> = ({ isStopped, setIsStopped }) => {

  const sounds = soundData.map(item => {
    return (
       <SoundItem 
         key={item.id}
         item={{ 
          ...item, 
          id: String(item.id)  // Converti id in stringa
        }}
          isStopped={isStopped}
          setIsStopped={setIsStopped}
          />
        );
      });      

    return (
        <div className="flex flex-col items-center my-4">
          {/* Sound Grid Section */}
          <div className="flex flex-wrap justify-center mt-8 py-4 border border-lightPink rounded-lg">
            {/* Sound Item Container */}
            <div className="flex flex-wrap flex-row items-center justify-center p-2">
              {/* Button & Progress */}
              {sounds}
            </div>
          </div>
        </div>
      );
    };

export default SoundsGrid;

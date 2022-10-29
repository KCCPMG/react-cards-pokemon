import React, {useState} from 'react';

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);

  const flipCard = () => {
    setIsFacingUp(isFacingUp => !isFacingUp)
  }

  return [isFacingUp, flipCard];
}


export default useFlip;
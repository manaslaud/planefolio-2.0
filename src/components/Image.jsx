import React from 'react';
import { useTexture } from '@react-three/drei';

const ImageWithPosition = ({ imagePath, position }) => {
 
  const texture = useTexture(imagePath);

  return (
    <mesh position={position} scale={[4,2,2]}>
      <planeBufferGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default ImageWithPosition;

import React from 'react';
import { useTexture } from '@react-three/drei';

const ImageWithPosition = ({ imagePath, position, link }) => {
 
  const texture = useTexture(imagePath);
  
  return (
    <mesh position={position} scale={[4,2,2]} onClick={(e)=>{
      window.open(link)
    }}>
      <planeBufferGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default ImageWithPosition;

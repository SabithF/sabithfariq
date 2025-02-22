import { Suspense , useEffect, useState  } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight
        position={[-20, 50, 10]}
        intensity={100}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7: 0.75}
        position={isMobile ? [0, -3.25, -2.2] : [0, -3.85, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        
        
        />
    </mesh>
  );
};

const ComputersCanvas = () => {

  // to handle the mobile view
  const [isMobile , setIsMobile] = useState(false);
  useEffect(() => {

    // Adding a listerner to check the change in the media query
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    // Setting the initial state of the isMobile
    setIsMobile(mediaQuery.matches);

    // Defining a callback fun to handle the change in the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Adding the event listener
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Removing the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile = {isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

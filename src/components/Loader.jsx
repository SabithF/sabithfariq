import {Html, useProgress} from '@react-three/drei';
import { progress } from 'framer-motion';
import { html, span } from 'framer-motion/client';

const Loader = () => {
  const {progress} = useProgress();
  return (
   <Html>
    <span className='canvas-loader'></span>
    <p 
      style={{
        fontSize: '14',
        color: '#f1f1f1',
        fontWeight: '800',
        merginTop: '40'
      }}>
        {progress.toFixed(2)}%</p>
   </Html>
  )
}

export default Loader
import { PerspectiveCamera, Environment } from "@react-three/drei";
import ParticleField from "./ParticleField";
import HeroEntity from "./HeroEntity";

const Scene = ({ scrollY }) => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#6C5CE7" />

            <ParticleField />
            <HeroEntity scrollY={scrollY} />

            {/* <Environment preset="city" /> */}
        </>
    );
};

export default Scene;
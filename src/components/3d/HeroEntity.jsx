import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

const HeroEntity = ({ scrollY }) => {
    const meshRef = useRef();
    const { mouse } = useThree();

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.elapsedTime;

            // Rotation based on time and scroll
            meshRef.current.rotation.x = time * 0.2 + scrollY * 0.001;
            meshRef.current.rotation.y = time * 0.3;

            // Mouse attraction effect
            meshRef.current.position.x = THREE.MathUtils.lerp(
                meshRef.current.position.x,
                mouse.x * 0.5,
                0.05
            );
            meshRef.current.position.y = THREE.MathUtils.lerp(
                meshRef.current.position.y,
                mouse.y * 0.5,
                0.05
            );

            // Pulsing scale
            const scale = 1 + Math.sin(time * 0.5) * 0.1;
            meshRef.current.scale.setScalar(scale);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <torusKnotGeometry args={[1, 0.3, 128, 32, 2, 3]} />
                <MeshTransmissionMaterial
                    thickness={0.5}
                    roughness={0.2}
                    transmission={0.98}
                    ior={1.5}
                    chromaticAberration={0.08}
                    anisotropy={0.5}
                    distortion={0.4}
                    distortionScale={0.5}
                    temporalDistortion={0.3}
                    color="#00DC82"
                    transparent
                    opacity={0.9}
                />
            </mesh>
        </Float>
    );
};


export default HeroEntity;

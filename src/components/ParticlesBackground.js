// src/components/ParticlesBackground.js
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptionsNormal from "../particles.json";
import particlesOptionsInverted from "../particlesInverted.json";
import "./ParticlesBackground.css";

const ParticlesBackground = ({ isInverted }) => {
    const [init, setInit] = useState(false);

    const particlesOptions = isInverted
        ? particlesOptionsInverted
        : particlesOptionsNormal;

    useEffect(() => {
        if (init) return;

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, [init]);

    return (
        <>
            {init && <Particles id="tsparticles" options={particlesOptions} />}
        </>
    );
};

export default ParticlesBackground;

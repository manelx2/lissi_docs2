'use client';

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export default function HeroSection() {
  return (
    <section className="flex-1 p-[60px] overflow-y-auto relative bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ShaderGradientCanvas
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          pixelDensity={1}
          fov={45}
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=90&cameraZoom=1&color1=%23b01267&color2=%23c61b2a&color3=%23c8f0ea&embedMode=off&envPreset=city&format=gif&fov=45&grain=on&lightType=3d&pixelDensity=1&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=plane&uAzimuthAngle=0&uBrightness=1.2&uColor1=%23b01267&uColor2=%23c61b2a&uColor3=%23c8f0ea&uFrequency=3.5&uIntensity=1&uPointSize=0.05&uPolarAngle=0&uResolution=1&uSpeed=0.2&uStrength=2&uTime=0&wireframe=off"
          />
        </ShaderGradientCanvas>
      </div>

      <div className="hero-content relative z-10">
        <div className="inline-block px-[18px] py-[10px] rounded-[30px] bg-white border border-line-lissi mb-[25px] font-semibold text-[14px]">
          LISSI Documentation Navigator
        </div>

        <h1 className="font-space text-[78px] leading-[0.95] tracking-[-4px] max-w-[850px] mb-[30px] text-[#4d4d4d]">
          Explore Intelligent Systems & Research Documentation
        </h1>

        <p className="max-w-[650px] leading-[1.8] text-[18px] opacity-85 mb-[45px]">
          A centralized platform for robotics, motion analysis,
          artificial intelligence, rehabilitation systems,
          signal processing and embedded engineering documentation.
        </p>

        <div className="flex gap-[20px] flex-wrap">
          <button className="px-[28px] py-[16px] rounded-[18px] bg-accent-lissi text-white font-semibold transition-all hover:-translate-y-[2px] text-[15px] border-none cursor-pointer">
            Open Documentation
          </button>
          <button className="px-[28px] py-[16px] rounded-[18px] bg-white border border-line-lissi text-foreground font-semibold transition-all hover:bg-[#fafafa] text-[15px] cursor-pointer">
            Explore Topics
          </button>
        </div>

        {/* Cards Grid */}
        <div className="mt-[70px] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          <TopicCard
            number="01"
            title="Robotics"
            description="Embedded systems, ROS2, STM32, sensors, motor control and robotic architectures."
          />
          <TopicCard
            number="02"
            title="Motion Analysis"
            description="Xsens tracking, gait analysis, biomechanical interpretation and rehabilitation data."
          />
          <TopicCard
            number="03"
            title="AI Systems"
            description="Computer vision, machine learning, inference systems and intelligent pipelines."
          />
        </div>
      </div>
    </section>
  );
}

function TopicCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-[24px] p-[28px] border border-line-lissi transition-all hover:-translate-y-[6px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
      <div className="w-[42px] h-[42px] rounded-[14px] bg-accent-lissi/10 flex items-center justify-center font-bold text-accent-lissi mb-5">
        {number}
      </div>
      <h3 className="font-space text-[24px] mb-3.5">{title}</h3>
      <p className="leading-[1.7] opacity-75">{description}</p>
    </div>
  );
}

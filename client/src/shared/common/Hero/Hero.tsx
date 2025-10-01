import Aurora from "@/components/Aurora";

const Hero = () => {
  return (
    <div className="w-full">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>
  );
};

export default Hero;

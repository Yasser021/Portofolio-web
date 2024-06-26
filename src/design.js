import React from "react";
import Card from "./card";
import Tdgc from "./image/TDGC.png"
import Smkn from "./image/Smkn.png"
import Port from "./image/portofolio.png"
const Design = () => {
  return (
    <div className="bg-black py-5">
      <section id="about" className="mt-10 container mx-auto py-5">
        <h1 className="text-3xl text-white flex justify-center text-center font-semibold mb-5">
          Recent Design
        </h1>
        <div className="">
          <header className="flex justify-between">
            <div className="flex justify-center">
              <Card
                backgroundColor={"#151515"}
                titleColor={"white"}
                textColor={"white"}
                title="TD Gaming Center"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                imageUrl={Tdgc}
                tags={[{label : 'figma', color: 'white',  }]}
              />
            </div>
            <div className="flex justify-center">
              <Card
                backgroundColor={"#151515"}
                titleColor={"white"}
                textColor={"white"}
                title="SMKN 4 Tangerang"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                imageUrl={Smkn}
                tags={[{label : 'figma', color: 'white',  }]}
              />
            </div>
            <div className="flex justify-center">
              <Card
                backgroundColor={"#151515"}
                titleColor={"white"}
                textColor={"white"}
                title="Portofolio Web"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                imageUrl={Port}
                tags={[{label : 'figma', color: 'white',  }]}
              />
            </div>
          </header>
        </div>
      </section>
    </div>
  );
};
export default Design;

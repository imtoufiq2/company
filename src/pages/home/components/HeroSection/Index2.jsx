import React from "react";
import Right from "./components/Right";

const Index2 = () => {
  return (
    <div
      id="mainParent"
      className="lg:bg-[#C2F2CE] max-w-[1300px] m-auto rounded-[32px]   "
    >
      <div
        id="parent"
        className="max-w-[1008px]  relative   mx-auto  mb-[10px] flex flex-col lg:flex-row gap-5 w-full"
      >
        <div id="leftParent" className=" bg-[#C2F2CE]  w-full lg:w-[60%] ">
          <div
            id="left"
            className="w-[90%] md:w-full  flex flex-col gap-4    m-auto  pt-3 md:pt5    md:h-fit "
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            voluptatem atque accusamus ipsa! Aperiam modi quia mollitia
            doloribus quibusdam odio quis voluptatem rem. Facere, fugit sequi!
            Ad quidem cum quaerat consequuntur deleniti odio deserunt, aut
            molestias rerum error officiis ipsa recusandae laborum, distinctio
            animi libero voluptas soluta corrupti! Placeat nostrum consectetur
            aliquam fuga eos cumque quaerat? Autem aliquid dicta excepturi,
            optio voluptatem, placeat provident pariatur voluptas veniam dolores
            cumque aspernatur ab dignissimos alias ut quidem. Sunt rerum
            corporis eos! Minima, id. Repellendus voluptatem dolores pariatur
            labore, atque cumque modi illo perspiciatis officia sunt sequi
            laudantium a quam vel nisi sint.
          </div>
        </div>
        <div
          id="right"
          className=" p-0 w-[90%]  mx-auto   rounded-2xl border-[0.5px] border-red-700     md:w-[40%]  px-0 "
        >
         <Right/>
        </div>
      </div>
    </div>
  );
};

export default Index2;

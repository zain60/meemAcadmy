import React from "react";
import CustomButton from "../../Components/Button/CustomButton";
import Data from "../../Data/corseData.json";

const page = () => {
  return (
    <div className=" pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-20 pt-36 mx-10 ">
      {Data.map((data, i) => {
        return (
          <div key={i}  className=" bg-base-100 shadow-red-950 shadow-2xl rounded-xl  ">
            <figure>
              <img
                src={data.imageSource}
                alt={data.Alt}
                className="w-full h-auto max-w-2xl"
              />
            </figure>
            <div className="card-body">
              <h2 className=" font-ReemKufiFun  text-3xl m-4  ">
                {data.courseTitle}
              </h2>
              <div className=" m-2">
                <CustomButton
                  name="Explore More"
                  refrence={`/Courses/${data.refrence}`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;

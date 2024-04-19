const DetailsCard = ({
  category,
  courseTitle,
  showCard,
  title,
  overview,
  highlights,
}) => {
  return (
    <div
      className={`w-full px-4  ${
        showCard === "Primary School" || showCard === category
          ? "block"
          : "hidden"
      }`}
    >
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[10px]"></div>
        <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
          <h3 className="text-dark  mb-5 text-xl font-bold">{courseTitle}</h3>
          <div className="w-full px-4">
            <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
              <div className="mb-8 flex text-redLight  text-2xl text-justify  items-center justify-center rounded-2xl bg-primary">
                {title}
              </div>
              <h4 className="mb-[14px] text-2xl text-justify  font-semibold text-dark ">
                {overview}
              </h4>
              <p className=" text-2xl text-justify ">{highlights}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsCard;

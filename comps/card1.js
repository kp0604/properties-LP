import React from "react";
// import styles from "./styles/Card.module.css";

const Card1 = ({ data }) => {
  // console.log(props.data)
  return (
    <div
      className="bg-white grid-start-1 grid-end-1 flex flex-col rounded-xl w-80 relative md:w-full"
      // style={{ fontFamily: "THICCCBOI-regular" }}
    >
      <img
        src="buil.jpg"
        alt="img"
        className=" sm:h-60 h-60 sm:w-96 rounded-t-xl"
      ></img>

      <span
        className="absolute z-10  top-8 left-4 bg-teal text-white 
      text-sm text-center rounded-2xl w-24 h-8 p-2 "
      >
        {data.FunStac1 !== "0" ? "FUNDED" : "ACTIVE"}
      </span>

      <div className=" w-full p-6  flex flex-col ">
        <span className="text-2xl font-bold py-2">{data.Name}</span>

        <span className="text-sm py-2 flex items-center">
          <svg
            className="mr-2"
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00008 0C4.58608 0.00158807 3.23045 0.564001 2.2306 1.56385C1.23075 2.5637 0.668336 3.91933 0.666748 
              5.33333C0.666748 7.67333 4.00008 13.35 5.43208 15.6827C5.49176 15.7797 5.57531 15.8598 5.67474 15.9153C5.77417 15.9709
              5.88618 16 6.00008 16C6.11416 16.0005 6.22643 15.9715 6.32596 15.9158C6.4255 15.8601 6.50891 15.7795 6.56808 15.682C8.00008
              13.3507 11.3334 7.676 11.3334 5.33333C11.3318 3.91933 10.7694 2.5637 9.76956 1.56385C8.76971 0.564001 7.41408 0.00158807
              6.00008 0V0ZM6.00008 7.66667C5.53859 7.66667 5.08746 7.52982 4.70375 7.27343C4.32004 7.01704 4.02097 6.65262 3.84436
              6.22626C3.66776 5.7999 3.62155 5.33075 3.71158 4.87812C3.80161 4.4255 4.02384 4.00974 4.35017 3.68342C4.67649 3.3571
              5.09225 3.13487 5.54487 3.04483C5.99749 2.9548 6.46665 3.00101 6.89301 3.17761C7.31937 3.35422 7.68379 3.65329 7.94018
              4.037C8.19657 4.42072 8.33341 4.87184 8.33341 5.33333C8.33341 5.95217 8.08758 6.54566 7.65 6.98325C7.21241 7.42083 6.61892
              7.66667 6.00008 7.66667Z"
              fill="#0F524B"
            />
          </svg>

          {data.Address}
        </span>
        {/* <div className="flex flex-wrap "> */}
        <div className="flex w-full justify-between">
          <div className=" bg-gray-300 rounded-xl my-4 w-44">
            <div
              className="bor-teal  border-4 rounded-xl w-20"
              style={{ width: `${data.Funsta}%` }}
            ></div>
          </div>

          <span className="text-teal pl-2 py-2 text-sm font-bold">
            {data.FunSta}% funded
          </span>
        </div>

        <div className="flex justify-between border-b-2 border-gray-200">
          <span className=" py-2 text-sm">Area</span>
          <span className="  py-2 text-sm font-bold">{data.Area}</span>
        </div>

        <div className="flex justify-between border-b-2 border-gray-200">
          <span className=" py-2 text-sm">Price psf</span>
          <span className="  py-2 text-sm font-bold">{data.Price}</span>
        </div>

        <div className="flex justify-between border-b-2 border-gray-200">
          <span className=" py-2 text-sm">Yield</span>
          <span className="  py-2 text-sm font-bold">{data.Yield}</span>
        </div>

        <div className="flex justify-between border-b-2 border-gray-200">
          <span className=" py-2 text-sm">Return Target</span>
          <span className="  py-2 text-sm font-bold">{data.RetTar}</span>
        </div>

        <div className="flex justify-between">
          <span className=" py-2 text-sm">Funding Status</span>
          <span className="  py-2 text-sm font-bold">{data.FunSta}%</span>
        </div>
        {/* </div> */}
        <button className="bg-teal text-white py-4 px-1 mt-6 rounded-xl flex justify-center items-center">
          View Opportunity{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card1;

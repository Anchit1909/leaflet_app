import React from "react";
import Data from "../utils/data";

let count1 = 0,
  count2 = 0,
  count3 = 0,
  count4 = 0;

for (let i = 0; i < Data.length; i++) {
  let data = Data[i].data;
  if (data < 300) {
    count1++;
  } else if (data > 300 && data < 500) {
    count2++;
  } else if (data > 500 && data < 700) {
    count3++;
  } else {
    count4++;
  }
}
let totalSum = count1 + count2 + count3 + count4;
// console.log(count1);
// console.log(count2);
// console.log(count3);
// console.log(count4);

const HorizontalBar = () => {
  return (
    <div className="flex flex-row mt-3 mx-auto px-4">
      <div
        style={{ width: `${(count1 / totalSum) * 100}%` }}
        className="h-2 bg-red-300 rounded-l-full"
      >
        <div className="pt-2 flex flex-row space-x-8 px-10 items-center justify-center">
          <span className="font-bold hidden lg:flex">{"Data < 300"}</span>
          <span>{(count1 / totalSum) * 100}%</span>
        </div>
      </div>
      <div
        style={{ width: `${(count2 / totalSum) * 100}%` }}
        className="h-2 bg-red-400"
      >
        <div className="pt-2 flex flex-row space-x-8 px-10 items-center justify-center">
          <span className="font-bold hidden xl:flex">
            {"Data > 300 & Data < 500"}
          </span>
          <span>{(count2 / totalSum) * 100}%</span>
        </div>
      </div>
      <div
        style={{ width: `${(count3 / totalSum) * 100}%` }}
        className="h-2 bg-red-500"
      >
        <div className="pt-2 flex flex-row space-x-8 px-10 items-center justify-center">
          <span className="font-bold hidden lg:flex">
            {"Data > 500 & Data < 700"}
          </span>
          <span>{(count3 / totalSum) * 100}%</span>
        </div>
      </div>
      <div
        style={{ width: `${(count4 / totalSum) * 100}%` }}
        className="h-2 bg-red-600 rounded-r-full"
      >
        <div className="pt-2 flex flex-row space-x-4 px-10 items-center justify-center">
          <span className="font-bold hidden lg:flex">{"Data > 700"}</span>
          <span>{(count4 / totalSum) * 100}%</span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBar;

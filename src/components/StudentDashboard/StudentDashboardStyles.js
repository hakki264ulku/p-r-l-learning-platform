import tw from "twin.macro";

export const Container = tw.div`text-center border-solid border-black rounded-t-lg border-2 p-2 rounded w-1/2 mt-8 mx-24`; //Dashboard Analytics Container bg-blue-300
export const H3 = tw.h3`font-bold text-4xl text-pink-600`; //Dashboard Title

export const AnalyticsContainer = tw.div`border-solid border-green-500 rounded content-center mx-12`; // Analytics Border Window
export const ChartContainer = tw.span`w-5/6`;

export const DashboardNavigator = tw.div`p-1 space-x-2 space-y-1`;
export const DashboardNavigatorButton = tw.button`text-gray-300 bg-yellow-600 hover:bg-yellow-600 hover:text-white bg-yellow-700 font-bold p-2 px-4 text-lg border-none rounded`;
export const DashboardNavigatorButtonClicked = tw.button`text-white bg-yellow-600 font-bold text-lg p-2 px-4 border-none rounded`;

//export const StudentImage = tw.img`rounded-2xl`

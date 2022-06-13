import tw from "twin.macro";

export const Container = tw.div`text-center h-screen bg-indigo-200 pt-2`; //3D Content Page Container
export const Title = tw.h1`font-bold text-4xl text-indigo-800`; //3D Content Page Title

export const ContentContainer = tw.div`flex items-start`;

export const ContentsContainer = tw.div`flex m-1 justify-between flex-wrap border-solid border-green-500 mt-8 ml-2 w-2/3 p-2`;

export const CardContainer = tw.div`bg-gray-800 p-2 text-white m-1 pb-2 hover:cursor-pointer`;
export const CardTitle = tw.p`font-bold text-white text-lg`;
export const CardImage = tw.img`w-auto h-auto`;

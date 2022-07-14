import tw from "twin.macro";

export const Container = tw.div`text-center pt-4 h-screen bg-indigo-200`;

export const Title = tw.h1`inline-flex text-justify space-x-5 font-bold text-6xl text-indigo-800 mb-0`;
export const Nav = tw.span`flex flex-row items-center py-2 px-0 gap-64 mx-48 bg-yellow-500`;
export const NavBorder = tw.div`box-border border-solid border-black rounded-t-lg border-2 bg-yellow-500 mx-12 items-center`;
export const Button = tw.button`bg-indigo-800 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-full`;

export const ContentContainerBox = tw.div`box-border border-solid border-black rounded-t-lg border-2 mx-12 items-center
bg-yellow-100 pb-8`;

export const ContentContainer = tw.div`pt-6`;

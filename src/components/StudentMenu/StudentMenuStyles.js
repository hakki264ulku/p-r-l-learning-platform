import tw from "twin.macro";

export const MainContainer = tw.div`flex-col w-1/6 m-8 rounded space-y-2.5
`; //Menu Container
//max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8

export const MenuButton = tw.button`p-4 font-bold text-gray-300 border-none hover:bg-yellow-800 hover:text-white bg-yellow-700 block w-full rounded
`; //Menu Button
export const MenuButtonClicked = tw.button`p-4 font-bold text-white border-none bg-yellow-600 block w-full rounded`; //Button Clicked Style

import tw, { styled } from "twin.macro";

export const Container = tw.div`text-center h-screen bg-yellow-200 pt-2 flex flex-col`; //3D Content Page Container bg-indigo-200

export const Title = styled.h2`
  ${tw`
    font-bold
    text-4xl
    text-center
    uppercase 
    text-indigo-800
    
  `}
`; //3D Content Page Title

export const ContentContainer = tw.div`flex items-start`;

export const ContentsContainer = styled.div`
  ${tw`h-[27rem] w-auto
    overflow-auto grid grid-cols-4 gap-4 
    justify-between border-solid border-yellow-500 rounded 
    mt-8 ml-12 p-2`}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardContainer = styled.div`
  ${tw`bg-gray-800 p-2 text-white h-52 m-1 pb-2 hover:cursor-pointer`}

  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CardTitle = tw.p`font-bold text-white text-lg `;
export const CardImage = tw.img`w-48 h-32`;

import dynamic from "next/dynamic";


const Index = () => {
    return (
      <>
      Hello from world
      </>
    )
  }
export default dynamic(() => Promise.resolve(Index), { ssr: true });




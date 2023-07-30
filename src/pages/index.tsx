import { type NextPage } from "next";

import dynamic from 'next/dynamic'
import BottomMenu from "@/components/Menu/BottomMenu";
// import HomeQrCode from "@/components/HomQrCode/HomeQrCode";
 
const HomeQrCode = dynamic(() => import('../components/HomQrCode/HomeQrCode'), { ssr: false })
import Button from "@/components/HomeModal/Button/Button";
import HomeModal from "@/components/HomeModal/HomeModal";

const Home: NextPage = () => {
  // const hello = api.example.getSecretMessage.useQuery();

  return (
    <>
      <main>
        <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-center">
          <HomeQrCode />
          {/* <div className="absolute bottom-0 z-10 h-full max-h-[60%] w-full max-w-md rounded-[3.5rem] bg-white">
            <Button />
          </div> */}
          <HomeModal />
          <BottomMenu />
        </div>
      </main>
    </>
  );
};

export default Home;

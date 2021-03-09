import React, {FC} from 'react';
import Image from "next/dist/client/image";
import Wallet from "../Wallet/Wallet";
import TabsNav from "./TabsNav";
import MobileNav from "./MobileNav";

type Props = {
  accounts: string[];
  onClickConnect: () => void;
  onClickInstall: () => void;
}

const Header: FC<Props> = ({accounts, onClickConnect, onClickInstall}) => {
  return (
    <div className={`w-full`}>

      <div className={`flex flex-col items-start mx-4 sm:mx-0 sm:flex-row justify-between sm:items-center w-full mb-8`}>
        <div className={`flex items-center`}>
          <Image src={`/images/logo.png`} alt={"Kiwi"} height={'50px'} width={'50px'}/>
          <p className={`text-2xl ml-4`}>Kiwi dApp</p>
        </div>
        <div className={`mt-4 sm:mt-0`}>
          <Wallet accounts={accounts} onClickConnect={onClickConnect} onClickInstall={onClickInstall}/>
        </div>
      </div>

      <div className={`hidden sm:block`}>
        <TabsNav selected={0}/>
      </div>

      <div className={`block sm:hidden`}>
        <MobileNav selected={0}/>
      </div>

      <div className={`text-left`}>
        <span className={`text-3xl`}>Welcome to Kiwi dApp👋</span>
        <p className={`font-light`}>An app to test <code className={`bg-green-100`}>web3.js</code> and Metamask
          integrations.</p>
      </div>

    </div>
  );
};

export default Header;
import React, {
  useEffect,
  useState
} from 'react';

import detectEthereumProvider from '@metamask/detect-provider';

import {
  WalletBlock,
  WalletTitle,
  WalletName,
  WalletText,
  WalletConnectBlock,
  WalletConnectBtn,
  ButtonIcon,
  ButtonName,
} from '../../assets/styles/pages/walletStyle';

export const Wallet: React.FC = React.memo(() => {

  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));
    };

    getProvider();

  }, []);

  const connectToMetamask = async () => {

    try {

      if ((window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        setWalletAddress(address);
        console.log('Connected to MetaMask');
      } else {
        console.error('MetaMask not found');
      }

    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (

    <>

      <WalletBlock>

        <WalletTitle>

          <WalletName>

            Connect Wallet

          </WalletName>

          <WalletText>

            Choose a wallet you want to connect.<br />There are several wallet providers.

          </WalletText>

        </WalletTitle>

        <WalletConnectBlock>

          {hasProvider && (

            <WalletConnectBtn onClick={connectToMetamask}>

              <ButtonIcon src={require('../../assets/icons/Metamask.svg').default} />

              <ButtonName>

                Metamask

              </ButtonName>

            </WalletConnectBtn>

          )}

        </WalletConnectBlock>

        {walletAddress && (
          <>

            <WalletText>

              Your Wallet Address:

            </WalletText>

            <WalletText>

              {walletAddress}

            </WalletText>

          </>

        )}

      </WalletBlock>

    </>

  );

});

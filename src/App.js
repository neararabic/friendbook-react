import React, { useEffect, useCallback, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { login, logout as destroy, accountBalance } from "./utils/near";
import Wallet from "./components/Wallet";
import { Notification } from "./components/utils/Notifications";
import MessagesList from "./components/messages/MessagesList";
import Cover from "./components/utils/Cover";
import coverImg from "./assets/img/main.jpg";
import "./App.css";

const App = function AppWrapper() {
  const account = window.walletConnection.account();

  const [balance, setBalance] = useState("0");

  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <>
      <Notification />
      {account.accountId ? (
        <>
          <Navbar>
            <Container>
              <Navbar.Brand href="/" className="fs-4 fw-bold mb-0">
                كتاب الأصدقاء{" "}
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Wallet
                  address={account.accountId}
                  amount={balance}
                  symbol="NEAR"
                  destroy={destroy}
                />
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container className="justify-content-center ">
            <main>
              <MessagesList login={login} account={account} />
            </main>
          </Container>
        </>
      ) : (
        <Cover name="كتاب الأصدقاء" login={login} coverImg={coverImg} />
      )}
    </>
  );
};

export default App;

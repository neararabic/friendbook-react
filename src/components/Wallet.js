import React from "react";
import { Dropdown, Stack, Spinner } from "react-bootstrap";
import {
  CurrencyExchange,
  PersonCircle,
  BoxArrowRight,
} from "react-bootstrap-icons";

const Wallet = ({ address, amount, symbol, destroy }) => {
  if (address) {
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle
            variant=""
            align="end"
            id="dropdown-basic"
            className="d-flex align-items-center border rounded-pill py-1"
          >
            <Stack direction="horizontal" gap={2}>
              <i className="bi bi-person-circle fs-4" />
              <span className="font-monospace">{address}</span>
            </Stack>
          </Dropdown.Toggle>

          <Dropdown.Menu className="shadow-lg border-0">
            <Dropdown.Item
              variant="light"
              align="end"
              id="dropdown-basic"
              className="d-flex align-items-center border py-1"
            >
              {amount ? (
                <>
                  <CurrencyExchange className="ml-3" color="royalblue" />
                  <span className="px-2">
                    {" "}
                    {amount} <span className="px-1"> - {symbol}</span>
                  </span>
                </>
              ) : (
                <Spinner animation="border" size="sm" className="opacity-25" />
              )}
            </Dropdown.Item>
            <Dropdown.Item
              href={`https://explorer.testnet.near.org/accounts/${address}`}
              target="_blank"
            >
              <PersonCircle className="ml-3" color="royalblue" />

              <span className="font-monospace px-2">{address}</span>
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item
              as="button"
              className="d-flex align-items-center"
              onClick={() => {
                destroy();
              }}
            >
              <BoxArrowRight className="ml-3 right " color="royalblue" />
              <span className="font-monospace px-1"> تسجيل الخروج</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }

  return null;
};

export default Wallet;

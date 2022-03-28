import React from "react";
import { Dropdown, Stack, Spinner } from "react-bootstrap";

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
              className="d-flex align-items-center border  py-1"
            >
              {amount ? (
                <>
                  <Stack direction="horizontal" gap={2}>
                    <i className="bi bi-currency-exchange fs-4" />
                    {amount} <span className="ms-1"> {symbol}</span>
                  </Stack>
                </>
              ) : (
                <Spinner animation="border" size="sm" className="opacity-25" />
              )}
            </Dropdown.Item>
            <Dropdown.Item
              href={`https://explorer.testnet.near.org/accounts/${address}`}
              target="_blank"
            >
              <Stack direction="horizontal" gap={2}>
                <i className="bi bi-person-circle fs-4" />
                <span className="font-monospace">{address}</span>
              </Stack>
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item
              as="button"
              className="d-flex align-items-center"
              onClick={() => {
                destroy();
              }}
            >
              <i className="bi bi-box-arrow-right me-2 fs-4" />
              تسجيل الخروج
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }

  return null;
};

export default Wallet;

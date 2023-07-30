import React, { useEffect } from "react";
import Image from "next/image";
import generatePayload from "promptpay-qr";
import { useLocalStorage } from "usehooks-ts";
import { QRCodeSVG } from "qrcode.react";

function HomeQrCode() {
  const [promptPay, setPromptPay] = useLocalStorage<{
    name: string;
    phoneNumber: string;
  }>("promptPay", { name: "", phoneNumber: "" });

  return (
    <>
      <div className="z-0 h-full w-full max-w-md bg-white p-1">
        <div className="h-full w-full max-w-md rounded-2xl bg-purple-950 p-3">
          <QRCodeSVG
            className="w-full"
            height={200}
            value={generatePayload(promptPay.phoneNumber, {
              amount: 0,
            })}
          />
          <div className="mt-5 text-center">
            <input
              autoComplete="false"
              placeholder="หมายเลขพร้อมเพย์/เลขบัตรประชาชน"
              type="text"
              value={promptPay.phoneNumber}
              onChange={(e) => {
                setPromptPay({"name": promptPay.name, "phoneNumber": e.target.value});
              }}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeQrCode;

import React, { useEffect } from "react";
import Image from "next/image";
import generatePayload from "promptpay-qr";
import QRCode from 'qrcode'

function HomeQrCode() {
  const payload = generatePayload("0828302070", {});
  const options = { type: 'svg', color: { dark: '#003b6a', light: '#f7f8f7' } }
  const qr = async () => {
    await new Promise((resolve, reject) => {
      QRCode.toString(payload, options, (err, svg) => {
        if (err) return reject(err);
        console.log(svg);
        
        resolve(svg);
      });
    });
  };

  useEffect(() => {
    console.log(qr());
    
  }, [])
  
  
  
  
  
  return (
    <>
      <div className="z-0 h-full w-full max-w-md bg-white p-1">
        <div className="h-full w-full max-w-md rounded-2xl bg-purple-950 p-3">
          {/* <Image
            src="https://static.vecteezy.com/system/resources/previews/002/557/391/original/qr-code-for-scanning-free-vector.jpg"
            alt=""
            className="ml-auto mr-auto mt-10 rounded-2xl"
            width={150}
            height={150}
          /> */}
          <div className="mt-5 text-center">
            <input
              autoComplete="false"
              placeholder="หมายเลขพร้อมเพย์/เลขบัตรประชาชน"
              type="text"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeQrCode;

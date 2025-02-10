import { Coffee } from "@phosphor-icons/react";

export default function PaymentLink() {
  return (
    <>
      <a
        href="https://buy.polar.sh/polar_cl_otwTyyimVXYgrsmM2LRNKxHS3rQ4NvGQ3IRN64IpBUa"
        data-polar-checkout
        data-polar-checkout-theme="light"
        className="ml-2 fixed bottom-6 flex text-sm gap-1 items-center justify-center bg-neutral-50 py-1 px-2 rounded-md shadow-md text-black-700"
      >
        Buy me a coffee <Coffee size={18} />
      </a>

      <script
        src="https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js"
        defer
        data-auto-init
      ></script>
    </>
  );
}

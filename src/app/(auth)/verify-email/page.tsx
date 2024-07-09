import { VerifyEmail } from "@/components/AuthComponents";

export default function () {
  return (
    <>
      <div className="w-full h-screen bg-slate-800">
      <h1 className="logo_gradient text-2xl font-bold p-3">build.io</h1>
      <div className="flex items-center justify-center w-full h-full">
        <VerifyEmail/>
      </div>
      </div>
    </>
  );
}

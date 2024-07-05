import { VerifyEmail } from "@/components/AuthComponents";

export default function () {
  return (
    <>
      <div className="w-full h-screen bg-slate-800">
      <h1 className="logo_gradient text-2xl font-bold">build.io</h1>
      <div className="flex items-center justify-center">
        <VerifyEmail/>
      </div>
      </div>
    </>
  );
}

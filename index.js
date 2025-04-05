
import Head from "next/head";
import ClarityEngineUI from "../components/ClarityEngineUI";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clarity Engine</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-8">
        <ClarityEngineUI />
      </main>
    </div>
  );
}

import Head from "next/head";
import Card1 from "../comps/card1";
import Card0 from "../comps/card0";
import { server } from "../config";

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/hello`);
  const data = await res.json();
  console.log(data);

  return { props: { data } };
};

export default function Home({ data }) {
  return (
    <div
      className="flex flex-col bg-gray-200 items-center relative "
      style={{ fontFamily: "THICCCBOI-regular" }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="bg-teal w-screen absolute inset-0"
        style={{ height: "550px" }}
      ></div>

        <span className="text-white md:text-5xl text-4xl  z-10 font-bold">
          Properties-LP
        </span>
      
      <div className="container md:px-16 px-6 flex flex-col md:mt-52 mt-36">
        <span className="text-white md:text-5xl text-4xl  z-10 font-bold">
          All properties
        </span>

        <Card0 data={data} />

        <span
          className="text-black md:text-6xl text-4xl  z-10 mt-14 font-bold"
          style={{ fontFamily: "THICCCBOI-regular" }}
        >
          Past properties
        </span>

        <div class=" grid grid-flow-col md:grid-cols-3 grid-cols-1 md:grid-rows-2  grid-rows-6  gap-8 my-10 z-10 mt-16">
          <Card1 data={data} />
          <Card1 data={data} />
          <Card1 data={data} />
          <Card1 data={data} />
          <Card1 data={data} />
          <Card1 data={data} />
        </div>
      </div>
    </div>
  );
}

import Hello from "./components/hello";

export default function Home() {
  console.log("What I am doing here? SERVER/CLIENT");
  return (
    <>
      <h1 className="text-3xl">I am learning Next.js</h1>
      <Hello />
    </>
  );
}

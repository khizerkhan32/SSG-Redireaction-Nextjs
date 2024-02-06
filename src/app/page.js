import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log(process.env.SERVER_PASSWORD);
  console.log("hi");
  return (
    <main className={styles.main}>
      {process.env.NODE_ENV == "development" ? (
        <h1>You are in Development Mode</h1>
      ) : (
        <h1>You are in Production Mode</h1>
      )}
      <h1>SSG in Next Js</h1>
      <h1>Redireaction in Next Js</h1>
    </main>
  );
}

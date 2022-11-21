import Head from "next/head";
import styles from "./layout.module.scss";
import { LayoutProps } from "./layout.types";

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div className={styles.view}>
        <>{children}</>
      </div>
    </>
  );
}

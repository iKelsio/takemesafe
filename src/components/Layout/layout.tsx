import styles from "./layout.module.scss";
import { LayoutProps } from "./layout.types";

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.view}>
      <>{children}</>
    </div>
  );
}

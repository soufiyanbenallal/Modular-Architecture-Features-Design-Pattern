import React from 'react'
import styles from "@shared/components/loading/spinner.module.scss";
export default function SpinnerComponent() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.sp}></div>
    </div>
  )
}

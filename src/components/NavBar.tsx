"use client"
import Link from "next/link";
import React from "react";
import styles from '../styles/page.module.scss'

type Props = {}

export default class Navbar extends React.Component {
  constructor(props: Props) { super(props) }

  render(): React.ReactNode {
      return (
        <div className={styles.navbar}>
          <div className={styles.margin20}>
            <Link href="/" className={styles.white}>
              Home
            </Link>
          </div>
          <div className={styles.margin20}>
            <Link href="/mathass1" className={styles.white}>
              Information
            </Link>
          </div>
        </div>
      );
  }
}
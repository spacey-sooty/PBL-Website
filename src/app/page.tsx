import Image from 'next/image'
import styles from '../styles/page.module.css'
import helloworld from './pages/helloworld'

export default function Home() {
  return (
    helloworld()
  )
}

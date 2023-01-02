import styles from './Message.module.css'
import { useState, useEffect } from 'react'

const Messages = ({ type, msg }) => {

    const [visibleMSG, setVisibleMSG] = useState(false)

    useEffect(() => {
        if(!msg) {
            setVisibleMSG(false)
            return
        }
        setVisibleMSG(true)

        const timerMSG = setTimeout(() => {
            setVisibleMSG(false)
        }, 3000)
        return () => clearTimeout(timerMSG)

    }, [msg])

  return (
    <>
       {visibleMSG && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
       )}
    </>
  )
}

export default Messages

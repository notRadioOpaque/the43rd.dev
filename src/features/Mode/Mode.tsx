import styles from './mode.module.css'

function Mode() {


  return (
    <div className={styles.container}>
      <p className={styles.label}>light</p>
      <div className={styles.switch} id='switch'>
        <div className={styles.handle}></div>
      </div>
      <p className={styles.label}>dark</p>
    </div>
  )
}

export default Mode;
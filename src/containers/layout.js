import React from 'react'
import Login from './login'
import styles from '../css/layout.module.css'
const Layout = props => {
    let mixStyles = {
        mainStyle: `flex-shrink-0 ${styles.Content}`
    }
    return (
        <div className="d-flex flex-column h-100">
            <main role="main" className={mixStyles.mainStyle}>
                <div className="container">
                    <Login />
                </div>
            </main>
        </div>
    )

}

export default Layout
import React from 'react';
import { connect } from 'dva';
import Header from '../../components/Header/Header'
import styles from './HomePage.css';
import Logo from '../../assets/logo.png';

function HomePage() {
  return (
    <div>
      <Header />
      <div id={styles.logo}>
        <div className={styles.logo}>
            <ul className={styles.left}>
              <a href=""><img src={Logo}/></a>
                <a href="">首页</a>
                <a href="">我的豆瓣</a>
                <a href="">浏览发现</a>
                <a href="">话题广场</a>
            </ul>
            {/* <input placeholder="搜索你感兴趣·的内容和人"/> */}
        </div>
      </div>
    </div>
)
}

HomePage.propTypes = {
};

export default connect()(HomePage);

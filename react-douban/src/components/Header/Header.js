// import React from 'react';
import React, { Component } from 'react'
import styles from './Header.css';

class Header extends Component {
    render(){
        return (
            <div id={styles.header}>
                <ul className={styles.left}>
                    <a href="">豆瓣</a>
                    <a href="">读书</a>
                    <a href="">电影</a>
                    <a href="">音乐</a>
                    <a href="">同城</a>
                    <a href="">小组</a>
                    <a href="">阅读</a>
                    <a href="">FM</a>
                    <a href="">时间</a>
                    <a href="">豆品</a>
                    <a href="">更多</a>
                </ul>
                <ul className={styles.right}>
                    <a href="">下载豆瓣客户端</a>
                    <a href="">提醒</a>
                    <a href="">豆邮（1）</a>
                    <a href="">XXX 的账户</a>
                </ul>
            </div>
        )
    }
}

export default Header
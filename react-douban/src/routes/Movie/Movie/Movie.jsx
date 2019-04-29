import React, { Component } from "react";

import Header from "../../../components/Header/Header";

import styles from "./Movie.css";

export default class Movie extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id={styles.db_nav_movie} className={styles.nav}>
          <div className={styles.container}>
            <div className={styles.nav_wrap}>
              <div className={styles.nav_primary}>
                <div className={styles.nav_logo}>
                  <a>豆瓣电影</a>
                </div>
                <div className={styles.nav_search}>
                  <form action="">
                    <fieldset>
                      <legend>搜索：</legend>
                      <label htmlFor="inp_query" />
                      <div className={styles.inp}>
                        <input
                          id={styles.inp_query}
                          name="search_text"
                          size="22"
                          maxLength="60"
                          placeholder="搜索电影、电视剧、综艺、影人"
                          autoComplete="off"
                        />
                      </div>
                      <div className={styles.inp_btn}>
                        <input type="submit" value="搜索" />
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className={styles.nav_secondary}>
              <div className={styles.nav_items}>
                <ul>
                  <li>
                    <a href="">我看</a>
                  </li>
                  <li>
                    <a href="">影讯&amp;购票</a>
                  </li>
                  <li>
                    <a href="">选电影</a>
                  </li>
                  <li>
                    <a href="">电视剧</a>
                  </li>
                  <li>
                    <a href="">排行榜</a>
                  </li>
                  <li>
                    <a href="">分类</a>
                  </li>
                  <li>
                    <a href="">影评</a>
                  </li>
                  <li>
                    <a href="">2018年度榜单</a>
                  </li>
                  <li>
                    <a href="">2018书影音报告</a>
                  </li>
                </ul>
              </div>
              <a href="" className={styles.movieannual2018} />
            </div>
          </div>
        </div>
        {/* 正在热映 */}
      </div>
    );
  }
}

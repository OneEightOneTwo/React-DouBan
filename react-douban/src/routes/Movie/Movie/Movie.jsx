import React, { Component } from "react";
import { connect } from "dva";
// 引用axios
// import axios from "axios";

import Header from "../../../components/Header/Header";
// 引用mock
// import "../../../mock/mock";
import styles from "./Movie.css";

class Movie extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   " id": "",
    //   " rating": "",
    //   " genres": ""
    //   // title: "",
    //   // casts: "",
    //   // collect_count: "",
    //   // original_title: "",
    //   // subtype: "",
    //   // directors: "",
    //   // year: "",
    //   // images: "",
    //   // alt: ""
    // };
  }

  // 组件挂载后再调用一次
  // componentDidMount() {
  //   axios
  //     .get("/data")
  //     .then(function(res) {
  //       const result = res.data.theaters[0].subjects;
  //       console.log(result);
  //       // const hot = result.map(item => {
  //       //   return {
  //       //     alt: item.alt,
  //       //     casts: item.casts,
  //       //     collect_count: item.collect_count,
  //       //     directors: item.directors,
  //       //     img: item.images.small,
  //       //     title: item.title
  //       //   };
  //       // });
  //       // console.log(hot);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

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
        <div className={styles.wrapper}>
          <div className={styles.contents}>
            <div className={styles.grid_16_8}>
              <div className={styles.article}>
                <div id={styles.screening} className={styles.s}>
                  <div className={styles.screening_hd}>
                    <div className={styles.ui_slide_control}>
                      <span className={styles.prev_btn}>
                        <a href="" className={styles.btn_prev} />
                      </span>
                      <span className={styles.next_btn}>
                        <a href="" className={styles.btn_next} />
                      </span>
                    </div>
                    <div className={styles.slide_tip}>
                      <span className={styles.ui_slide_index}>1</span> /
                      <span className={styles.ui_slide_max}>5</span>
                    </div>
                    <h2>
                      正在热映
                      <span>
                        <a href="">全部正在热映»</a>
                      </span>
                      <span>
                        <a href="">即将上映»</a>
                      </span>
                    </h2>
                  </div>
                  <div className={styles.screening_hd}>
                    <ul
                      className={styles.ui_slide_content}
                      style={{ left: -700 }}
                    >
                      {/* 1 */}
                      <li className={styles.ui_slide_item + " " + styles.s}>
                        <ul>
                          <li className={styles.poster}>
                            <a href=" ">
                              <img
                                src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552058346.webp"
                                alt=""
                              />
                            </a>
                          </li>
                          <li className={styles.titles}>
                            <a href="">复仇者联盟4...</a>
                          </li>
                          <li className={styles.rating}>
                            <span
                              className={
                                styles.rating_star + " " + styles.allstar45
                              }
                            />
                            <span className={styles.subject_rate}>8.8</span>
                          </li>
                          <li className={styles.ticket_btn}>
                            <span>
                              <a href="">选座购票</a>
                            </span>
                          </li>
                        </ul>
                      </li>

                      {/* 2 */}
                      <li className={styles.ui_slide_item + " " + styles.s}>
                        <ul>
                          <li className={styles.poster}>
                            <a href=" ">
                              <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2554905337.webp" />
                            </a>
                          </li>
                          <li className={styles.titles}>
                            <a href="">何以为家</a>
                          </li>
                          <li className={styles.rating}>
                            <span
                              className={
                                styles.rating_star + " " + styles.allstar45
                              }
                            />
                            <span className={styles.subject_rate}>8.8</span>
                          </li>
                          <li className={styles.ticket_btn}>
                            <span>
                              <a href="">选座购票</a>
                            </span>
                          </li>
                        </ul>
                      </li>

                      {/* 3 */}
                      <li className={styles.ui_slide_item + " " + styles.s}>
                        <ul>
                          <li className={styles.poster}>
                            <a href=" ">
                              <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551353482.webp" />
                            </a>
                          </li>
                          <li className={styles.titles}>
                            <a href="">反贪风暴4</a>
                          </li>
                          <li className={styles.rating}>
                            <span
                              className={
                                styles.rating_star + " " + styles.allstar35
                              }
                            />
                            <span className={styles.subject_rate}>6.3</span>
                          </li>
                          <li className={styles.ticket_btn}>
                            <span>
                              <a href="">选座购票</a>
                            </span>
                          </li>
                        </ul>
                      </li>

                      {/* 4 */}
                      <li className={styles.ui_slide_item + " " + styles.s}>
                        <ul>
                          <li className={styles.poster}>
                            <a href=" ">
                              <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551995207.webp" />
                            </a>
                          </li>
                          <li className={styles.titles}>
                            <a href="">调音师</a>
                          </li>
                          <li className={styles.rating}>
                            <span
                              className={
                                styles.rating_star + " " + styles.allstar45
                              }
                            />
                            <span className={styles.subject_rate}>8.3</span>
                          </li>
                          <li className={styles.ticket_btn}>
                            <span>
                              <a href="">选座购票</a>
                            </span>
                          </li>
                        </ul>
                      </li>

                      {/* 5 */}
                      <li className={styles.ui_slide_item + " " + styles.s}>
                        <ul>
                          <li className={styles.poster}>
                            <a href=" ">
                              <img
                                src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554775210.webp"
                                alt="撞死了一只羊"
                              />
                            </a>
                          </li>
                          <li className={styles.titles}>
                            <a href="">撞死了一只羊...</a>
                          </li>
                          <li className={styles.rating}>
                            <span
                              className={
                                styles.rating_star + " " + styles.allstar25
                              }
                            />
                            <span className={styles.subject_rate}>4.9</span>
                          </li>
                          <li className={styles.ticket_btn}>
                            <span>
                              <a href="">选座购票</a>
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                {/*  douban ad begin */}
                <div className={styles.movie_home_left_bottom}>
                  <img
                    src="https://img3.doubanio.com/view/dale-online/dale_ad/public/5bbcfd8ded9c330.jpg"
                    border="0"
                    width="675"
                    height="112"
                    style={{ position: "absolute" }}
                  />
                </div>
                {/*  douban ad end */}

                {/* 最近热门电影begin */}
                <div
                  className={
                    styles.gaia +
                    " " +
                    styles.gain_lite +
                    " " +
                    styles.gain_movie +
                    " " +
                    styles.slide_mode
                  }
                >
                  <div className={styles.fliter_wp}>
                    <h2>
                      <div data-type="movie" className={styles.activate}>
                        最近热门电影
                      </div>
                      <div className={styles.filter}>
                        <form
                          action="get"
                          className={styles.gaia_frm}
                          autoComplete="off"
                          style={{ transform: " translate(109px,-26px)" }}
                        >
                          <input type="hidden" name="type" value="movie" />
                          <div className={styles.tag}>
                            <div className={styles.tag_list}>
                              <label className={styles.activate}>
                                热门
                                <input
                                  type="radio"
                                  name="tag"
                                  value="热门"
                                  checked="checked"
                                />
                              </label>

                              <label>
                                最新
                                <input type="radio" name="tag" value="最新" />
                              </label>

                              <label>
                                豆瓣高分
                                <input
                                  type="radio"
                                  name="tag"
                                  value="豆瓣高分"
                                />
                              </label>

                              <label>
                                冷门佳片
                                <input
                                  type="radio"
                                  name="tag"
                                  value="冷门佳片"
                                />
                              </label>

                              <label>
                                华语
                                <input type="radio" name="tag" value="华语" />
                              </label>

                              <label>
                                欧美
                                <input type="radio" name="tag" value="欧美" />
                              </label>

                              <label>
                                韩国
                                <input type="radio" name="tag" value="韩国" />
                              </label>

                              <label>
                                日本
                                <input type="radio" name="tag" value="日本" />
                              </label>
                            </div>
                          </div>
                          <input type="hidden" name="page_limit" value="50" />
                          <input type="hidden" name="page_start" value="0" />
                        </form>
                      </div>
                      <div
                        className={styles.filter_placeholder}
                        style={{ height: 0 }}
                      />

                      <a
                        href=""
                        className={styles.more_link}
                        style={{
                          fontSize: 13,
                          display: "block",
                          transform: " translate(640px,-57px)"
                        }}
                      >
                        更多»
                      </a>
                    </h2>
                  </div>
                </div>
                {/* 最近热门电影end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(Movie);

import React, { Component } from "react";
import { connect } from "dva";

import Header from "../../../components/Header/Header";

import styles from "./Movie.css";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgList: [
        {
          imgUrl: require("../../../assets/review_01.jpg"),
          title: "是枝裕和导演，请转行拍美食吧！",
          authors: "福桃九分饱",
          reviews: "《小偷家族》",
          cont:
            "我一直觉得，是枝裕和该去拍美食纪录片。在看完他的《小偷家族》之后更加坚定了这样的想法。 比如电影刚开始不久，偷完东西的治带着祥太去买热乎乎的现炸可乐饼，尽管自己都穷得吃不上饭，却依旧把可乐饼递给瑟瑟..."
        },
        {
          imgUrl: require("../../../assets/review_02.jpg"),
          title: "《一出好戏》戏里戏外，带着黄渤式的幽默，探讨着黄渤的世界观。",
          authors: "猴头虫",
          reviews: "《一出好戏》",
          cont:
            " 上海影城《一出好戏》的首映礼看完的整体感觉 四个字：真 的 好 看！ 再四个字：值 得 二 刷！ 很多从演员蜕变成导演的多重身份艺人对电影的理解和传统的导演是不一样的，所以这些人的片子特别是处女座都有着极强..."
        },
        {
          imgUrl: require("../../../assets/review_03.jpg"),
          title: "谎言终究是谎言",
          authors: "世界尽头",
          reviews: "《楚门的世界》",
          cont:
            " 在楚门的生活中没有基丁这样的启蒙者，他要自发地觉醒并进行自我拯救，这在现实中几乎不可能，所以影片里，体制是不怀好意的，比起跋扈专横的父权，它演变成全民的偷窥行为。在这座无所不包的摄影棚里，导演给了..."
        }
      ]
    };
  }

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
                              <img
                                src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2554905337.webp"
                                alt=""
                              />
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
                              <img
                                src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551353482.webp"
                                alt=""
                              />
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
                              <img
                                src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551995207.webp"
                                alt=""
                              />
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
                    alt=""
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
                  <div
                    className={styles.detail_pop}
                    style={{ display: "none", top: 725, left: 366.667 }}
                  >
                    1
                  </div>
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
                    </h2>
                  </div>
                  <div className={styles.list_up}>
                    <div className={styles.slide}>
                      <div
                        className={styles.slide_container}
                        style={{ height: 426 }}
                      >
                        <div className={styles.slide_wrapper}>
                          <div
                            className={styles.slide_page}
                            style={{ width: 700 }}
                            data-index="0"
                          >
                            {/* 01 */}
                            <a href="" className={styles.item}>
                              <div className={styles.cover_wp}>
                                <img
                                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2542973862.jpg"
                                  alt="飞驰人生"
                                />
                              </div>
                              <p>
                                飞驰人生
                                <strong>6.9</strong>
                              </p>
                            </a>

                            {/* 02 */}
                            <a href="" className={styles.item}>
                              <div className={styles.cover_wp}>
                                <img
                                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549537782.jpg"
                                  alt="过春天"
                                />
                              </div>
                              <p>
                                过春天
                                <strong>7.8</strong>
                              </p>
                            </a>

                            {/* 03 */}
                            <a href="" className={styles.item}>
                              <div className={styles.cover_wp}>
                                <img
                                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2548053134.jpg"
                                  alt="教授与疯子"
                                />
                              </div>
                              <p>
                                <span className={styles.green}>
                                  <img
                                    src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                                    alt="新"
                                    width="16"
                                    className={styles.new}
                                  />
                                </span>
                                教授与疯子
                                <strong>7.7</strong>
                              </p>
                            </a>

                            {/* 04 */}
                            <a href="" className={styles.item}>
                              <div className={styles.cover_wp}>
                                <img
                                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531644863.jpg"
                                  alt="彼布利亚古书堂事件手帖"
                                />
                              </div>
                              <p>
                                <span className={styles.green}>
                                  <img
                                    src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                                    alt="新"
                                    width="16"
                                    className={styles.new}
                                  />
                                </span>
                                彼布利亚古书堂事件手帖
                                <strong>6.4</strong>
                              </p>
                            </a>

                            {/* 05 */}
                            <a href="" className={styles.item}>
                              <div className={styles.cover_wp}>
                                <img
                                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2532743911.jpg"
                                  alt="日暮"
                                />
                              </div>
                              <p>
                                <span className={styles.green}>
                                  <img
                                    src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                                    alt="新"
                                    width="16"
                                    className={styles.new}
                                  />
                                </span>
                                日暮
                                <strong>6.2</strong>
                              </p>
                            </a>

                            {/* 06 */}
                            <a href="" className={styles.item}>
                              <div className={styles.cover_wp}>
                                <img
                                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552522615.jpg"
                                  alt="风中有朵雨做的云"
                                />
                              </div>
                              <p>
                                风中有朵雨做的云
                                <strong>7.4</strong>
                              </p>
                            </a>

                            {/* 07 */}
                            <a href="" className={styles.item}>
                              <div className={styles.cover_wp}>
                                <img
                                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549177902.jpg"
                                  alt="绿皮书"
                                />
                              </div>
                              <p>
                                绿皮书
                                <strong>8.9</strong>
                              </p>
                            </a>

                            {/* 08 */}
                            <a href="" className={styles.item}>
                              <div className={styles.cover_wp}>
                                <img
                                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2546828235.jpg"
                                  alt="阳台上"
                                />
                              </div>
                              <p>
                                阳台上
                                <strong>5.7</strong>
                              </p>
                            </a>

                            {/* 09 */}
                            <a href="" className={styles.item}>
                              <div className={styles.cover_wp}>
                                <img
                                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545472803.jpg"
                                  alt="流浪地球"
                                />
                              </div>
                              <p>
                                流浪地球
                                <strong>7.9</strong>
                              </p>
                            </a>

                            {/* 10 */}
                            <a href="" className={styles.item}>
                              <div className={styles.cover_wp}>
                                <img
                                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530599636.jpg"
                                  alt="小偷家族"
                                />
                              </div>
                              <p>
                                小偷家族
                                <strong>8.7</strong>
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          styles.slide_ctrl + " " + styles.ui_slide_control
                        }
                        style={{
                          float: "none",
                          textAlign: "center",
                          margin: " 0 0 13",
                          transform: "translateX(276px)"
                        }}
                      >
                        <a className={styles.btn_prev} href="javascript:;" />
                        <a className={styles.btn_next} href="javascript:;" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* 最近热门电影end */}

                {/* 热门推荐begin */}
                <div className={styles.gallery_frames}>
                  <div className={styles.gallery_hd}>
                    <div className={styles.gallery_ui_slide_control}>
                      <span className={styles.prev_btn}>
                        <a
                          className={styles.gallery_btn_prev}
                          href="javascript:void(0)"
                        />
                      </span>

                      <span className={styles.next_btn}>
                        <a
                          className={styles.gallery_btn_next}
                          href="javascript:void(0)"
                        />
                      </span>
                    </div>
                    <div className={styles.slide_tip}>
                      <span className={styles.gallery_ui_slide_index}>1</span>/
                      <span className={styles.gallery_ui_slide_max}>5</span>
                    </div>
                    <h2>热门推荐</h2>
                  </div>
                  <div className={styles.hot_gallery}>
                    <ul className={styles.ui_slide_content}>
                      <li className={styles.ui_slide_item}>
                        <div className={styles.gallery_frame}>
                          <a href="">
                            <img
                              src="https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/68983670420431b.jpg"
                              alt="太刺激！HBO新剧新片混剪预告"
                              width="350"
                              height="240"
                            />
                          </a>
                          <div className={styles.gallery_detail}>
                            <div className={styles.gallery_hd}>
                              <a href="">
                                <h3>太刺激！HBO新剧新片混剪预告</h3>
                              </a>
                            </div>
                            <div className={styles.gallery_bd}>
                              <p>
                                《大小谎言第二季》《黑暗物质三部曲》《守望者》…美剧迷过年了！
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* 热门推荐end */}

                {/* 最受欢迎的影评begin */}
                <div id={styles.reviews} className={styles.s}>
                  <div className={styles.reviews_hd}>
                    <h2>
                      最受欢迎的影评
                      <span>
                        <a href="">更多热门影评»</a>
                      </span>
                      <span>
                        <a href="">新片影评»</a>
                      </span>
                    </h2>
                  </div>
                  <div className={styles.reviews_bd}>
                    {this.state.msgList.map((item, index) => {
                      return (
                        <div className={styles.review}>
                          <div className={styles.review_hd}>
                            <a href="">
                              <img
                                className={styles.lazy}
                                src={item.imgUrl}
                                alt={item.reviews}
                              />
                            </a>
                          </div>
                          <div className={styles.review_bd}>
                            <h3>
                              <a href="">{item.title}</a>
                            </h3>
                            <div className={styles.review_meta}>
                              <a href="">{item.authors}</a>
                              评论
                              <a href="">{item.reviews}</a>
                              <span className={styles.allstar50} />
                            </div>
                            <div className={styles.review_content}>
                              {item.cont}
                              <a href="">(全文)</a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* 最受欢迎的影评end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Movie);

import React, { Component } from "react";
import { connect } from "dva";
import Header from "../../components/Header/Header";
import Searchbtn from "../../components/Search/Searchbtn";
// 上传多张照片（照片墙）
import PicturesWall from "../../components/Upload/Upload";
// 上传单张照片
// import Avatar from '../../components/Upload_one/Upload_one';
import Logo from "../../assets/logo.png";
import { Icon } from "antd";
import { Input } from "antd";
import styles from "./HomePage.css";
const { TextArea } = Input;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
      display: "none",
      num: 0,
      contentList: [
        {
          headerImg: require("../../assets/timg.jpg"),
          userName: "老姚",
          title: "广西一日游",
          content:
            "白色和红色的吉普像两艘小船游弋在孤峰之间，将数亿年前形成的喀斯特地貌甩在身后。 吉普车里坐着我们一行六人。能迅速凑到五个不上班的朋友来广西自驾，我的中年裸辞也显得合乎情理了。虽然...",
          contentImg: require("../../assets/el-templo-principal.jpg"),
          from: "中国旅游杂志"
        },
        {
          headerImg: require("../../assets/p.jpg"),
          userName: "聪聪",
          title: "广西一日游",
          content:
            "白色和红色的吉普像两艘小船游弋在孤峰之间，将数亿年前形成的喀斯特地貌甩在身后。 吉普车里坐着我们一行六人。能迅速凑到五个不上班的朋友来广西自驾，我的中年裸辞也显得合乎情理了。虽然...",
          contentImg: require("../../assets/okochisanso-garden.jpg"),
          from: "中国旅游杂志"
        },
        {
          headerImg: require("../../assets/0.jpg"),
          userName: "菜徐坤",
          title: "广西一日游",
          content:
            "白色和红色的吉普像两艘小船游弋在孤峰之间，将数亿年前形成的喀斯特地貌甩在身后。 吉普车里坐着我们一行六人。能迅速凑到五个不上班的朋友来广西自驾，我的中年裸辞也显得合乎情理了。虽然...",
          contentImg: require("../../assets/spirits-bar-sunface.jpg"),
          from: "中国旅游杂志",
          fromUrl: ""
        }
      ],
      name: "土豆"

      // myDate :  new Date()
    };
    this.inputValueChange = this.inputValueChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.setStyle2 = this.setStyle2.bind(this);
    // this.btnDelete = this.btnDelete.bind(this)
  }
  render() {
    return (
      <div>
        <Header />
        <div id={styles.logo}>
          <div className={styles.logo}>
            <ul className={styles.left}>
              <a href="">
                <img src={Logo} alt="logo图片" alt="" />
              </a>
              <a href="">首页</a>
              <a href="">我的豆瓣</a>
              <a href="">浏览发现</a>
              <a href="">话题广场</a>
            </ul>
            <Searchbtn />
          </div>
        </div>
        <div id={styles.neirong}>
          <div className={styles.neirong}>
            <div className={styles.neirong_left}>
              <div className={styles.top}>
                <span onClick={this.setStyle}>
                  <Icon type="message" />
                  &nbsp;说句话
                </span>
                <span onClick={this.setStyle2}>
                  <Icon type="picture" />
                  &nbsp;发照片
                </span>
                <span>
                  <Icon type="link" />
                  &nbsp;推荐网页
                </span>
                <span>
                  <Icon type="book" />
                  &nbsp;写日记
                </span>
                <div
                  style={{ display: this.state.num === 0 ? "block" : "none" }}
                >
                  <TextArea
                    rows={1}
                    placeholder="分享生活点滴..."
                    value={this.state.inputValue}
                    style={{ width: "625px" }}
                    // onChange={this.inputValueChange}
                    // onPressEnter={this.send}
                    onFocus={this.setStyle}
                  />
                  <input
                    type="button"
                    value="提交"
                    style={{ height: "32px", width: "50px" }}
                    onClick={this.btnClick}
                  />
                </div>
                {/* 发评论输入框 */}
                <div
                  className={styles.search_speak}
                  style={{ display: this.state.num === 1 ? "block" : "none" }}
                >
                  <TextArea
                    rows={5}
                    placeholder="分享生活点滴..."
                    value={this.state.inputValue}
                    onChange={this.inputValueChange}
                    // onPressEnter={this.send}
                    style={{ width: "100%" }}
                  />
                  <div className={styles.search_speak_bottom}>
                    <a className={styles.aa}>添加网页推荐工具</a>
                    <input
                      className={styles.fabu_btn}
                      onClick={
                        this.state.inputValue.length > 0 ? this.btnClick : null
                      }
                      type="button"
                      value="发布"
                    />
                  </div>
                </div>
                {/* 发照片输入框 */}
                <div
                  className={styles.search_speak}
                  style={{ display: this.state.num === 2 ? "block" : "none" }}
                >
                  <TextArea
                    rows={5}
                    placeholder="分享生活点滴..."
                    value={this.state.inputValue}
                    onChange={this.inputValueChange}
                    // onPressEnter={this.send}
                    style={{ width: "100%" }}
                  />
                  <PicturesWall />
                  <div className={styles.search_speak_bottom}>
                    <a className={styles.aa}>添加网页推荐工具</a>
                    <input
                      className={styles.fabu_btn}
                      onClick={
                        this.state.inputValue.length > 0 ? this.btnClick : null
                      }
                      type="button"
                      value="发布"
                    />
                  </div>
                </div>
              </div>
              {/* <p>{this.state.list.map((item,index)=>{
                      return <p key={index}>{item}</p>
                    })}</p> */}
              {/* 发评论部分 */}
              <ul>
                {this.state.list.map((item, index) => {
                  return (
                    <div className={styles.listLi} key={index}>
                      {/* <Avatar /> */}
                      <img className={styles.li_selfImg} alt="" />
                      <span
                        className={styles.li_user}
                        style={{ marginLeft: "10px" }}
                      >
                        {this.state.name}说
                      </span>
                      <div
                        className={styles.li_speak}
                        style={{ paddingLeft: "80px" }}
                      >
                        {item}
                      </div>
                      <div
                        className={styles.li_bottom}
                        style={{ marginLeft: "10px" }}
                      >
                        <a className={styles.li_time}>
                          {new Date().toLocaleString()}
                        </a>
                        <a>回应</a>
                        <a>转发</a>
                        <a onClick={this.btnDelete.bind(this, index)}>删除</a>
                      </div>
                    </div>
                  );
                })}
              </ul>
              {/* 热门精选文章 */}
              <ul id="contentList">
                {this.state.contentList.map((item, index) => {
                  return (
                    <div className={styles.listLi} key={index}>
                      {/* <Avatar /> */}
                      <img
                        className={styles.li_headerImg}
                        src={item.headerImg}
                        alt=".."
                      />
                      <span className={styles.li_user}>
                        {item.userName}的日记
                      </span>
                      <div className={styles.content_bg}>
                        <a className={styles.li_title}>{item.title}</a>
                        <div className={styles.li_content}>{item.content}</div>
                        <img
                          className={styles.li_contentImg}
                          src={item.contentImg}
                          alt=".."
                        />
                        <a className={styles.from} href={item.fromUrl}>
                          {item.from}
                        </a>
                      </div>
                      <div className={styles.li_content_bottom}>
                        <a className={styles.li_time}>
                          {new Date().toLocaleDateString()}
                        </a>
                        <span>来自 热门精选</span>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="neirong_right" />
          </div>
        </div>
      </div>
    );
  }
  // componentDidMount()
  // {
  //     this.timerID = setInterval(
  //         () => {
  //           this.state.myDate = new Date()
  //         },
  //         1000
  //     );
  // }

  // componentWillUnmount(){
  //     clearInterval(this.timerID)
  // }

  // 首次输入框聚焦事件及评论点击事件
  setStyle() {
    this.setState(() => {
      if (this.state.num === 0) {
        return {
          num: 1
        };
      } else if (this.state.num === 1) {
        return {
          num: 0
        };
      } else if (this.state.num === 2) {
        return {
          num: 1
        };
      }
    });
  }
  setStyle2() {
    this.setState(() => {
      if (this.state.num === 2) {
        return {
          num: 0
        };
      } else if (this.state.num === 0 || this.state.num === 1) {
        return {
          num: 2
        };
      }
    });
  }
  // 获取输入框的值
  inputValueChange(e) {
    const value = e.target.value;
    this.setState(() => {
      return {
        inputValue: value
      };
    });
  }

  // 点击提交，输入框的值添加到数组
  btnClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      // list:this.state.list.push(this.state.inputValue),
      inputValue: ""
    }));
  }

  // 删除数据
  btnDelete(index) {
    // console.log(index)
    if (window.confirm("你确定要删除内容吗？")) {
      const list = this.state.list;
      list.splice(index, 1);
      this.setState(() => ({
        list: list
      }));
    }
  }
}

HomePage.propTypes = {};

export default connect()(HomePage);

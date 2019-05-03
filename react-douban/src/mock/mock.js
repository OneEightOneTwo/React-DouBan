// 使用Mock
import Mock from "mockjs";

// 配置拦截ajax的请求时的行为，支持的配置项目有timeout
Mock.setup({
  timeout: "200-400"
});
// 表示响应时间为200到400毫秒

// Mock响应模板
Mock.mock("/data", {
  theaters: [
    {
      subjects: [
        {
          rating: {
            max: 10,
            average: 8.8,
            stars: "45",
            min: 0
          },
          genres: ["动作", "科幻", "奇幻"],
          title: "复仇者联盟4：终局之战",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1016681/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg"
              },
              name: "小罗伯特·唐尼",
              id: "1016681"
            },
            {
              alt: "https://movie.douban.com/celebrity/1017885/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg"
              },
              name: "克里斯·埃文斯",
              id: "1017885"
            },
            {
              alt: "https://movie.douban.com/celebrity/1040505/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15885.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15885.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15885.jpg"
              },
              name: "马克·鲁弗洛",
              id: "1040505"
            }
          ],
          collect_count: 407409,
          original_title: "Avengers: Endgame",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1321812/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1555672594.77.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1555672594.77.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1555672594.77.jpg"
              },
              name: "安东尼·罗素",
              id: "1321812"
            },
            {
              alt: "https://movie.douban.com/celebrity/1320870/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg"
              },
              name: "乔·罗素",
              id: "1320870"
            }
          ],
          year: "2019",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552058346.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552058346.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552058346.jpg"
          },
          alt: "https://movie.douban.com/subject/26100958/",
          id: "26100958"
        },
        {
          rating: {
            max: 10,
            average: 8.8,
            stars: "45",
            min: 0
          },
          genres: ["剧情"],
          title: "何以为家",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1393813/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/pa96FEdlJe08cel_avatar_uploaded1526709219.38.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/pa96FEdlJe08cel_avatar_uploaded1526709219.38.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/pa96FEdlJe08cel_avatar_uploaded1526709219.38.jpg"
              },
              name: "赞恩·阿尔·拉菲亚",
              id: "1393813"
            },
            {
              alt: "https://movie.douban.com/celebrity/1411924/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1551513231.02.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1551513231.02.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1551513231.02.jpg"
              },
              name: "约丹诺斯·希费罗",
              id: "1411924"
            },
            {
              alt: "https://movie.douban.com/celebrity/1395545/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1549962696.77.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1549962696.77.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1549962696.77.jpg"
              },
              name: "博鲁瓦蒂夫·特雷杰·班科尔",
              id: "1395545"
            }
          ],
          collect_count: 28310,
          original_title: "كفرناحوم",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1275745/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18917.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18917.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18917.jpg"
              },
              name: "娜丁·拉巴基",
              id: "1275745"
            }
          ],
          year: "2018",
          images: {
            small:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2553734348.jpg",
            large:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2553734348.jpg",
            medium:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2553734348.jpg"
          },
          alt: "https://movie.douban.com/subject/30170448/",
          id: "30170448"
        },
        {
          rating: {
            max: 10,
            average: 7.4,
            stars: "40",
            min: 0
          },
          genres: ["剧情"],
          title: "撞死了一只羊",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1362878/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539580440.17.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539580440.17.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539580440.17.jpg"
              },
              name: "金巴",
              id: "1362878"
            },
            {
              alt: "https://movie.douban.com/celebrity/1363820/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1478411142.94.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1478411142.94.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1478411142.94.jpg"
              },
              name: "更登彭措",
              id: "1363820"
            },
            {
              alt: "https://movie.douban.com/celebrity/1400147/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535689588.89.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535689588.89.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535689588.89.jpg"
              },
              name: "索朗旺姆",
              id: "1400147"
            }
          ],
          collect_count: 11677,
          original_title: "撞死了一只羊",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1316181/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1554295519.81.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1554295519.81.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1554295519.81.jpg"
              },
              name: "万玛才旦",
              id: "1316181"
            }
          ],
          year: "2018",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554775210.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554775210.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554775210.jpg"
          },
          alt: "https://movie.douban.com/subject/30283179/",
          id: "30283179"
        },
        {
          rating: {
            max: 10,
            average: 8.3,
            stars: "45",
            min: 0
          },
          genres: ["喜剧", "犯罪", "悬疑"],
          title: "调音师",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1327903/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1549016715.18.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1549016715.18.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1549016715.18.jpg"
              },
              name: "阿尤斯曼·库拉纳",
              id: "1327903"
            },
            {
              alt: "https://movie.douban.com/celebrity/1040796/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1475469381.11.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1475469381.11.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1475469381.11.jpg"
              },
              name: "塔布",
              id: "1040796"
            },
            {
              alt: "https://movie.douban.com/celebrity/1329473/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1554656744.53.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1554656744.53.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1554656744.53.jpg"
              },
              name: "拉迪卡·艾普特",
              id: "1329473"
            }
          ],
          collect_count: 281079,
          original_title: "Andhadhun",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1306786/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1545725463.81.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1545725463.81.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1545725463.81.jpg"
              },
              name: "斯里兰姆·拉格万",
              id: "1306786"
            }
          ],
          year: "2018",
          images: {
            small:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551995207.jpg",
            large:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551995207.jpg",
            medium:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551995207.jpg"
          },
          alt: "https://movie.douban.com/subject/30334073/",
          id: "30334073"
        },
        {
          rating: {
            max: 10,
            average: 6.3,
            stars: "35",
            min: 0
          },
          genres: ["动作", "犯罪"],
          title: "反贪风暴4",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1027577/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421047436.79.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421047436.79.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421047436.79.jpg"
              },
              name: "古天乐",
              id: "1027577"
            },
            {
              alt: "https://movie.douban.com/celebrity/1274666/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40550.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40550.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40550.jpg"
              },
              name: "郑嘉颖",
              id: "1274666"
            },
            {
              alt: "https://movie.douban.com/celebrity/1037562/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517921928.93.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517921928.93.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517921928.93.jpg"
              },
              name: "林峯",
              id: "1037562"
            }
          ],
          collect_count: 52526,
          original_title: "P風暴",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1326068/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357529568.73.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357529568.73.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357529568.73.jpg"
              },
              name: "林德禄 ",
              id: "1326068"
            }
          ],
          year: "2019",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551353482.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551353482.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551353482.jpg"
          },
          alt: "https://movie.douban.com/subject/27202819/",
          id: "27202819"
        },
        {
          rating: {
            max: 10,
            average: 6.3,
            stars: "35",
            min: 0
          },
          genres: ["喜剧", "动画", "奇幻"],
          title: "神奇乐园历险记",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1412961/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1552877631.35.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1552877631.35.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1552877631.35.jpg"
              },
              name: "索菲亚·玛丽",
              id: "1412961"
            },
            {
              alt: "https://movie.douban.com/celebrity/1054512/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26079.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26079.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26079.jpg"
              },
              name: "詹妮弗·加纳",
              id: "1054512"
            },
            {
              alt: "https://movie.douban.com/celebrity/1068149/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1548996503.57.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1548996503.57.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1548996503.57.jpg"
              },
              name: "肯·哈德森·坎贝尔",
              id: "1068149"
            }
          ],
          collect_count: 1172,
          original_title: "Wonder Park",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1414949/",
              avatars: {
                small:
                  "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                large:
                  "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                medium:
                  "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
              },
              name: "迪兰·布朗",
              id: "1414949"
            }
          ],
          year: "2019",
          images: {
            small:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2552076937.jpg",
            large:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2552076937.jpg",
            medium:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2552076937.jpg"
          },
          alt: "https://movie.douban.com/subject/26662282/",
          id: "26662282"
        },
        {
          rating: {
            max: 10,
            average: 6.9,
            stars: "35",
            min: 0
          },
          genres: ["剧情"],
          title: "老师·好",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1274307/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504169127.76.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504169127.76.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504169127.76.jpg"
              },
              name: "于谦",
              id: "1274307"
            },
            {
              alt: "https://movie.douban.com/celebrity/1351587/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1442330240.0.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1442330240.0.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1442330240.0.jpg"
              },
              name: "汤梦佳",
              id: "1351587"
            },
            {
              alt: "https://movie.douban.com/celebrity/1403828/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1542251128.4.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1542251128.4.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1542251128.4.jpg"
              },
              name: "王广源",
              id: "1403828"
            }
          ],
          collect_count: 45929,
          original_title: "老师·好",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1383594/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550730545.46.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550730545.46.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550730545.46.jpg"
              },
              name: "张栾",
              id: "1383594"
            }
          ],
          year: "2019",
          images: {
            small:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.jpg",
            large:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.jpg",
            medium:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.jpg"
          },
          alt: "https://movie.douban.com/subject/27663742/",
          id: "27663742"
        },
        {
          rating: {
            max: 10,
            average: 6.3,
            stars: "35",
            min: 0
          },
          genres: ["剧情", "家庭"],
          title: "狗眼看人心",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1037715/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20776.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20776.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20776.jpg"
              },
              name: "黄磊",
              id: "1037715"
            },
            {
              alt: "https://movie.douban.com/celebrity/1274496/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420531092.61.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420531092.61.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420531092.61.jpg"
              },
              name: "闫妮",
              id: "1274496"
            },
            {
              alt: "https://movie.douban.com/celebrity/1274722/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6026.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6026.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6026.jpg"
              },
              name: "韩童生",
              id: "1274722"
            }
          ],
          collect_count: 2485,
          original_title: "狗眼看人心",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1322986/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1546928222.97.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1546928222.97.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1546928222.97.jpg"
              },
              name: "吴楠",
              id: "1322986"
            }
          ],
          year: "2019",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551690865.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551690865.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551690865.jpg"
          },
          alt: "https://movie.douban.com/subject/30479973/",
          id: "30479973"
        },
        {
          rating: {
            max: 10,
            average: 8,
            stars: "40",
            min: 0
          },
          genres: ["剧情", "悬疑"],
          title: "祈祷落幕时",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1012581/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1551.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1551.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1551.jpg"
              },
              name: "阿部宽",
              id: "1012581"
            },
            {
              alt: "https://movie.douban.com/celebrity/1028170/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12218.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12218.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12218.jpg"
              },
              name: "松岛菜菜子",
              id: "1028170"
            },
            {
              alt: "https://movie.douban.com/celebrity/1274835/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517915920.05.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517915920.05.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517915920.05.jpg"
              },
              name: "沟端淳平",
              id: "1274835"
            }
          ],
          collect_count: 88582,
          original_title: "祈りの幕が下りる時",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1336349/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1397359805.26.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1397359805.26.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1397359805.26.jpg"
              },
              name: "福泽克雄",
              id: "1336349"
            }
          ],
          year: "2018",
          images: {
            small:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2552073598.jpg",
            large:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2552073598.jpg",
            medium:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2552073598.jpg"
          },
          alt: "https://movie.douban.com/subject/27040737/",
          id: "27040737"
        },
        {
          rating: {
            max: 10,
            average: 8,
            stars: "40",
            min: 0
          },
          genres: ["剧情", "家庭"],
          title: "地久天长",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1275934/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12560.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12560.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12560.jpg"
              },
              name: "王景春",
              id: "1275934"
            },
            {
              alt: "https://movie.douban.com/celebrity/1276041/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469426474.73.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469426474.73.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469426474.73.jpg"
              },
              name: "咏梅",
              id: "1276041"
            },
            {
              alt: "https://movie.douban.com/celebrity/1318634/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43726.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43726.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43726.jpg"
              },
              name: "齐溪",
              id: "1318634"
            }
          ],
          collect_count: 89837,
          original_title: "地久天长",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1018708/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1553157534.76.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1553157534.76.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1553157534.76.jpg"
              },
              name: "王小帅",
              id: "1018708"
            }
          ],
          year: "2019",
          images: {
            small:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg",
            large:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg",
            medium:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
          },
          alt: "https://movie.douban.com/subject/26715636/",
          id: "26715636"
        },
        {
          rating: {
            max: 10,
            average: 4.7,
            stars: "25",
            min: 0
          },
          genres: ["剧情", "爱情"],
          title: "如影随心",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1325412/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1426609728.07.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1426609728.07.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1426609728.07.jpg"
              },
              name: "陈晓",
              id: "1325412"
            },
            {
              alt: "https://movie.douban.com/celebrity/1323516/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1369000054.37.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1369000054.37.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1369000054.37.jpg"
              },
              name: "杜鹃",
              id: "1323516"
            },
            {
              alt: "https://movie.douban.com/celebrity/1367682/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501833870.86.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501833870.86.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501833870.86.jpg"
              },
              name: "王嘉",
              id: "1367682"
            }
          ],
          collect_count: 5621,
          original_title: "如影随心",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1006351/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2187.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2187.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2187.jpg"
              },
              name: "霍建起",
              id: "1006351"
            }
          ],
          year: "2019",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553279350.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553279350.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553279350.jpg"
          },
          alt: "https://movie.douban.com/subject/26871669/",
          id: "26871669"
        },
        {
          rating: {
            max: 10,
            average: 3.4,
            stars: "20",
            min: 0
          },
          genres: ["喜剧"],
          title: "转型团伙",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1037098/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515744596.63.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515744596.63.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515744596.63.jpg"
              },
              name: "吴镇宇",
              id: "1037098"
            },
            {
              alt: "https://movie.douban.com/celebrity/1316368/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473410979.5.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473410979.5.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473410979.5.jpg"
              },
              name: "乔杉",
              id: "1316368"
            },
            {
              alt: "https://movie.douban.com/celebrity/1351426/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494494152.36.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494494152.36.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494494152.36.jpg"
              },
              name: "文松",
              id: "1351426"
            }
          ],
          collect_count: 1695,
          original_title: "转型团伙",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1037098/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515744596.63.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515744596.63.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515744596.63.jpg"
              },
              name: "吴镇宇",
              id: "1037098"
            }
          ],
          year: "2019",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553741576.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553741576.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553741576.jpg"
          },
          alt: "https://movie.douban.com/subject/26857654/",
          id: "26857654"
        },
        {
          rating: {
            max: 10,
            average: 8.7,
            stars: "45",
            min: 0
          },
          genres: ["剧情", "传记", "音乐"],
          title: "波西米亚狂想曲",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1044903/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1860.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1860.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1860.jpg"
              },
              name: "拉米·马雷克",
              id: "1044903"
            },
            {
              alt: "https://movie.douban.com/celebrity/1344763/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1548177691.13.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1548177691.13.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1548177691.13.jpg"
              },
              name: "本·哈迪",
              id: "1344763"
            },
            {
              alt: "https://movie.douban.com/celebrity/1049517/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13772.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13772.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13772.jpg"
              },
              name: "约瑟夫·梅泽罗",
              id: "1049517"
            }
          ],
          collect_count: 279882,
          original_title: "Bohemian Rhapsody",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1049586/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1403264395.93.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1403264395.93.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1403264395.93.jpg"
              },
              name: "布莱恩·辛格",
              id: "1049586"
            }
          ],
          year: "2018",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549558913.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549558913.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549558913.jpg"
          },
          alt: "https://movie.douban.com/subject/5300054/",
          id: "5300054"
        },
        {
          rating: {
            max: 10,
            average: 8.4,
            stars: "45",
            min: 0
          },
          genres: ["喜剧", "动画", "家庭"],
          title: "麦兜·我和我妈妈",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1037715/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20776.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20776.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20776.jpg"
              },
              name: "黄磊",
              id: "1037715"
            },
            {
              alt: "https://movie.douban.com/celebrity/1127819/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1354430265.42.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1354430265.42.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1354430265.42.jpg"
              },
              name: "吴君如",
              id: "1127819"
            },
            {
              alt: "https://movie.douban.com/celebrity/1342865/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1477457912.14.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1477457912.14.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1477457912.14.jpg"
              },
              name: "张正中",
              id: "1342865"
            }
          ],
          collect_count: 66087,
          original_title: "麥兜‧我和我媽媽",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1304710/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35544.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35544.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35544.jpg"
              },
              name: "谢立文",
              id: "1304710"
            },
            {
              alt: "https://movie.douban.com/celebrity/1342864/",
              avatars: {
                small:
                  "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                large:
                  "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                medium:
                  "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
              },
              name: "李俊民",
              id: "1342864"
            }
          ],
          year: "2014",
          images: {
            small:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551331237.jpg",
            large:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551331237.jpg",
            medium:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551331237.jpg"
          },
          alt: "https://movie.douban.com/subject/25884416/",
          id: "25884416"
        },
        {
          rating: {
            max: 10,
            average: 0,
            stars: "00",
            min: 0
          },
          genres: ["剧情", "悬疑"],
          title: "云雾笼罩的山峰",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1369078/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539679178.87.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539679178.87.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539679178.87.jpg"
              },
              name: "王海涛",
              id: "1369078"
            },
            {
              alt: "https://movie.douban.com/celebrity/1359164/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539679193.26.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539679193.26.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539679193.26.jpg"
              },
              name: "任青安",
              id: "1359164"
            },
            {
              alt: "https://movie.douban.com/celebrity/1327994/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492336336.36.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492336336.36.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492336336.36.jpg"
              },
              name: "丁建钧",
              id: "1327994"
            }
          ],
          collect_count: 409,
          original_title: "云雾笼罩的山峰",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1402738/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539679138.11.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539679138.11.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1539679138.11.jpg"
              },
              name: "左志国",
              id: "1402738"
            }
          ],
          year: "2018",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553741104.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553741104.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553741104.jpg"
          },
          alt: "https://movie.douban.com/subject/30336318/",
          id: "30336318"
        },
        {
          rating: {
            max: 10,
            average: 6.6,
            stars: "35",
            min: 0
          },
          genres: ["动作", "奇幻", "冒险"],
          title: "雷霆沙赞！",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1027147/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1392178173.13.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1392178173.13.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1392178173.13.jpg"
              },
              name: "扎克瑞·莱维",
              id: "1027147"
            },
            {
              alt: "https://movie.douban.com/celebrity/1274374/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1457350889.15.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1457350889.15.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1457350889.15.jpg"
              },
              name: "马克·斯特朗",
              id: "1274374"
            },
            {
              alt: "https://movie.douban.com/celebrity/1381710/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1541231928.29.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1541231928.29.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1541231928.29.jpg"
              },
              name: "亚瑟·安其",
              id: "1381710"
            }
          ],
          collect_count: 111922,
          original_title: "Shazam!",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1354769/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1455853108.97.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1455853108.97.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1455853108.97.jpg"
              },
              name: "大卫·F·桑德伯格",
              id: "1354769"
            }
          ],
          year: "2019",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551249211.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551249211.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551249211.jpg"
          },
          alt: "https://movie.douban.com/subject/2244426/",
          id: "2244426"
        },
        {
          rating: {
            max: 10,
            average: 8,
            stars: "40",
            min: 0
          },
          genres: ["科幻", "灾难"],
          title: "流浪地球",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1359081/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1533348792.03.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1533348792.03.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1533348792.03.jpg"
              },
              name: "屈楚萧",
              id: "1359081"
            },
            {
              alt: "https://movie.douban.com/celebrity/1000525/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1549645325.74.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1549645325.74.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1549645325.74.jpg"
              },
              name: "吴京",
              id: "1000525"
            },
            {
              alt: "https://movie.douban.com/celebrity/1275178/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1540619056.43.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1540619056.43.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1540619056.43.jpg"
              },
              name: "李光洁",
              id: "1275178"
            }
          ],
          collect_count: 1650583,
          original_title: "流浪地球",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1276086/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1536678787.83.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1536678787.83.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1536678787.83.jpg"
              },
              name: "郭帆",
              id: "1276086"
            }
          ],
          year: "2019",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545472803.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545472803.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545472803.jpg"
          },
          alt: "https://movie.douban.com/subject/26266893/",
          id: "26266893"
        },
        {
          rating: {
            max: 10,
            average: 8.9,
            stars: "45",
            min: 0
          },
          genres: ["剧情", "喜剧", "传记"],
          title: "绿皮书",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1054520/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29922.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29922.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29922.jpg"
              },
              name: "维果·莫腾森",
              id: "1054520"
            },
            {
              alt: "https://movie.douban.com/celebrity/1004702/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1488440651.5.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1488440651.5.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1488440651.5.jpg"
              },
              name: "马赫沙拉·阿里",
              id: "1004702"
            },
            {
              alt: "https://movie.douban.com/celebrity/1010545/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1405786644.35.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1405786644.35.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1405786644.35.jpg"
              },
              name: "琳达·卡德里尼",
              id: "1010545"
            }
          ],
          collect_count: 633550,
          original_title: "Green Book",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1036662/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29610.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29610.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29610.jpg"
              },
              name: "彼得·法雷里",
              id: "1036662"
            }
          ],
          year: "2018",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549177902.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549177902.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549177902.jpg"
          },
          alt: "https://movie.douban.com/subject/27060077/",
          id: "27060077"
        },
        {
          rating: {
            max: 10,
            average: 0,
            stars: "00",
            min: 0
          },
          genres: ["剧情"],
          title: "小石头下乡记",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1388267/",
              avatars: {
                small:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735863.47.jpg",
                large:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735863.47.jpg",
                medium:
                  "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735863.47.jpg"
              },
              name: "郑亚龙",
              id: "1388267"
            },
            {
              alt: "https://movie.douban.com/celebrity/1411202/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735879.26.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735879.26.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735879.26.jpg"
              },
              name: "宋铁梁",
              id: "1411202"
            },
            {
              alt: "https://movie.douban.com/celebrity/1388266/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735937.93.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735937.93.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735937.93.jpg"
              },
              name: "李月",
              id: "1388266"
            }
          ],
          collect_count: 27,
          original_title: "小石头下乡记",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1388265/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735641.06.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735641.06.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550735641.06.jpg"
              },
              name: "张雷",
              id: "1388265"
            }
          ],
          year: "2019",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2548772681.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2548772681.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2548772681.jpg"
          },
          alt: "https://movie.douban.com/subject/30461812/",
          id: "30461812"
        },
        {
          rating: {
            max: 10,
            average: 4.9,
            stars: "25",
            min: 0
          },
          genres: ["动作", "奇幻", "冒险"],
          title: "境·界",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1315081/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1413634637.74.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1413634637.74.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1413634637.74.jpg"
              },
              name: "福士苍汰",
              id: "1315081"
            },
            {
              alt: "https://movie.douban.com/celebrity/1318811/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363533549.64.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363533549.64.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363533549.64.jpg"
              },
              name: "杉咲花",
              id: "1318811"
            },
            {
              alt: "https://movie.douban.com/celebrity/1315730/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452688394.85.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452688394.85.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452688394.85.jpg"
              },
              name: "吉泽亮",
              id: "1315730"
            }
          ],
          collect_count: 9017,
          original_title: "BLEACH",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1296732/",
              avatars: {
                small:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1462476561.94.jpg",
                large:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1462476561.94.jpg",
                medium:
                  "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1462476561.94.jpg"
              },
              name: "佐藤信介",
              id: "1296732"
            }
          ],
          year: "2018",
          images: {
            small:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551872873.jpg",
            large:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551872873.jpg",
            medium:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551872873.jpg"
          },
          alt: "https://movie.douban.com/subject/4844731/",
          id: "4844731"
        }
      ]
    }
  ]
});

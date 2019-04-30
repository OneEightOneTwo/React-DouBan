import React, { Component } from 'react'
import { Input } from 'antd';
const Search = Input.Search;
// import styles from './Search.css';

class Searchbtn extends Component {
    render(){
        return (
            <Search
                placeholder="搜索你感兴趣的内容和人"
                onSearch={value => console.log(value)}
                enterButton
                style={{
                    width:"280px",
                    height:"30px",
                    float:"right",
                    display:"inline-block",
                    marginTop:"22px"
                }}
            />
        )
    }
}

export default Searchbtn
import React, { Component } from 'react'
import { Upload,Icon, Modal } from 'antd';
// import emitter from '../../util/events';
import store from '../../store';
import './Upload.css'

class PicturesWall extends Component {
  constructor(props){
    super(props);
    console.log(store.getState());
    
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [
      //   {
      //   uid: '-1',
      //   name: 'xxx.png',
      //   status: 'done',
      //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // }
    ],
  };
  }
  
  // shouldComponentUpdate(){
  //   return false;
  // }
  
  componentDidUpdate(){
    // console.log(this.state.fileList+`组件更新完毕`)
      
  }
  // componentWillReceiveProps(){
  //   // this.setState(()=>({
  //   //   fileList:[]
  //   // }))
  //   console.log('componentWillReceiveProps')
  // }
  componentDidMount(){
    // console.log(this.state.fileList+`挂载完毕`)
  }
  // 取消监听
  componentWillUnmount() {
    // emitter.removeListener(this.eventEmitter);
  }
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => {
    if(fileList.length){
      this.setState({ 
        fileList,

      })
      this.props.getFileList(fileList)
    }
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">可上传9张照片</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 9 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall
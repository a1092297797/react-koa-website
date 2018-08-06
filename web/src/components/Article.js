import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked'
import './style/article.css';
import {Divider,Spin } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});//基本设置


class About extends Component {
	constructor(props){
    super(props);
    this.state={
        data:[],
        status:false,
        isloading:true
    };
  }
  createMarkup(text) {
    return {__html: text};
  }

  componentWillMount(){
  	console.log(this.props.match.params.id)
    this.ajaxGetMsg(this.props.match.params.id);
  }

  ajaxGetMsg(id){
    axios.get('http://localhost:8080/article',{
      params:{
        id:id
      }
    }).then((res)=>{
      console.log(res)
      this.setState({
        data:res.data.data,
        status:res.data.status,
        isloading:false
      })
    }).catch((error)=>{
      console.log(error);   
    });
  }

  render() {
  	let article;
    if(this.state.isloading){
      article = <Spin />
    }else if(this.state.status){
  		 article = (<article className='content-text'>
          <nav><h2>{this.state.data.title}</h2><span>发表于{moment(this.state.data.createdate).fromNow()+' '+moment(this.state.data.createdate).format('l')}</span></nav>
          <Divider type="horizontal" />
          <div className='sumary'>{this.state.data.sumary}</div>    
        	<div dangerouslySetInnerHTML={this.createMarkup(marked(this.state.data.content))} ></div>
        </article>);
  	}else{
  		article = <p>文章不存在或者已被删除</p>
  	}
    return (
      <div>
        {article}
      </div>
    );
  }
}

export default About;
import { List, Avatar, Button, Spin } from 'antd';
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


class LoadMoreList extends React.Component {

  componentDidMount(){
    this.ajaxGetMsg(this.currentPage);
  }

  ajaxGetMsg(page){
    axios.get('http://localhost:8080/list',{
      params:{
        page:page,
        limit:10
      }
    }).then((res)=>{
      console.log(res.data)
      this.setState({
        loading:false,
        data:[...this.state.data,...res.data.data],
        topicnum:res.data.topicnum,
        loadingMore:false,
        page:this.state.page+1
      })
    }).catch((error)=>{
      console.log(error);   
    });
  }

  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    data: [],
    topicnum:10,
    page:1
  }



  onLoadMore = () => {

    this.setState({
      loadingMore: true,
    });
    this.ajaxGetMsg(this.state.page+1)
  }

  render() {
    const { loading, loadingMore, showLoadingMore, data } = this.state;
    const loadMore = showLoadingMore ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
      </div>
    ) : null;
    return (
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={data}
        renderItem={item => (
          <List.Item >
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<Link to={'/article/'+item.id}>{item.title}</Link>}
              description={item.sumary}
            />
            <div>发表于{moment(item.createdate).fromNow()}</div>
          </List.Item>
        )}
      />
    );
  }
}

export default LoadMoreList;
import React, { Component } from 'react';
import {Row,Col} from 'antd';
import {Input} from 'antd';
import 'antd/dist/antd.css'
import logo from '../logo.svg';
import './App.css';

//
class App extends Component {
  constructor(props) {
      super(props);
      this.fn = this.fn.bind(this);
      this.hand = this.hand.bind(this);
      this.wode = this.wode.bind(this);
      //设置初始值
      this.state = {
          a:'',
          b:''
      }
  };
  //获取input中的值，动态渲染再节点上去
    wode(e) {
        let value = e.target.value;
        this.setState({b:value})
    };
    hand(e) {
        let value = e.target.value;
        this.setState({a:value})
    };
    fn() {
        //点击事件,然后拼接数据，最后通过AJAX发送待后台API地址，后台进行解析
        //对象值的方式
        let data = {name: this.state.a, password: this.state.b};
        let str = JSON.stringify(data);
        fetch("http://localhost:8080/reg", {
            method: "POST",
            headers: {
                //"Content-Type": 'application/x-www-form-urlencoded;charset=utf-8',
                "Content-Type": "application/json"

            },
            mode: 'cors',
            body: str
        }).then(response => response.json())
            .then(json => {
                console.log(json);

            })
            .catch(function (error) {
                console.log('request failed: ', error)
            });
    }
  render() {
    return (
      <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">与世界分享你的知识，经验和见解</h1>
            </header>
          <Row>
              <Col span={24}>
                <form action="" id="reg-form">
                    <Col  span={6} offset={9}><Input size="large" type="text" placeholder="手机号或邮箱" className="input" value={this.state.a} onChange={this.hand} /></Col>
                    <Col  span={6} offset={9}><Input type="password" placeholder="密码" className="input" value={this.state.b} onChange={this.wode}/></Col>
                    <Col  span={6} offset={9} id="span"><span className="span">手机验证码登陆</span></Col>
                </form>
                  <Col span={6} offset={9}><Input type="button" value="登陆" className="input1" onClick={this.fn}/></Col>
                  <Col span={6} offset={9} id="span1"><span className="span1">二维码登陆</span><span className="span1">海外手机登陆</span><span className="span1">社交账号登陆</span></Col>
              </Col>
          </Row>

      </div>
    );
  }
}

export default App;

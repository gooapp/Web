import React, { Component } from 'react'
import icon from '../imgs/icon.png';
import shot1 from '../imgs/shot1.png';
import shot2 from '../imgs/shot2.png';
import shot3 from '../imgs/shot3.png';
import shot4 from '../imgs/shot4.png';
import shot5 from '../imgs/shot5.png';
import styles from './mainPage.module.css';
import { FaApple, FaAndroid } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class MainPage extends Component 
{
    state = {

    }

    componentDidMount ()
    {
        window.addEventListener("resize", this.windowResize.bind(this));
    }

    componentWillUnmount ()
    {
        window.removeEventListener("resize", this.windowResize);
    }

    windowResize ()
    {
        this.forceUpdate();
    }


    render ()
    {
        const windowWidth = window.innerWidth;

        return (
            <div className={ styles.container }>

                {/* top */ }
                <div className={ styles.top }>
                    {/* topLeft */ }
                    <div className={ styles.topLeft }>
                        <img className={ styles.icon } src={ icon } />
                    </div>

                    {/* topRight */ }
                    <div className={ styles.topRight }>
                        <div className={ styles.headerText }>Goo浏览器</div>
                        <div className={ styles.headerIntroText }>免费小说、影视、漫画</div>
                        <div className={ styles.downloadContainer }>
                            <div
                                className={ `${ styles.download } ${ styles.downloadText }` }
                                onClick={ () =>
                                {
                                    console.log("ios");
                                } }
                            >

                                <FaApple size={ 16 } className={ styles.downloadIcon } /> iPhone下载
                            </div>

                            <div
                                className={ `${ styles.download } ${ styles.downloadText }` }
                                onClick={ () =>
                                {
                                    console.log("android");

                                } }
                            >
                                <FaAndroid size={ 16 } /> Android下载
                            </div>
                        </div>
                    </div>
                </div>

                {/* mid */ }
                <div
                    className={ styles.mid }
                    style={ { width: windowWidth - 40, } }
                >
                    <img className={ styles.shotImage } src={ shot1 } />
                    <img className={ styles.shotImage } src={ shot2 } />
                    <img className={ styles.shotImage } src={ shot3 } />
                    <img className={ styles.shotImage } src={ shot4 } />
                    <img className={ styles.shotImage } src={ shot5 } />

                </div>


                {/* bottom */ }
                <div className={ styles.bottom }>
                    <p className={ styles.bottomTitleText }>
                        聚集互联网免费内容
                    </p>
                    <div>全网小说免费看 </div>
                    <div>会员影视免费看</div>
                    <div>全网漫画免费看</div>
                    <div>🧧积分能提现🧧</div>
                </div>

                {/* 协议 */ }
                <div className={ styles.protocol }>
                    <Link to="/mianZheShengMing">免责声明</Link>
                    <span className={ styles.sep }>|</span>
                    <Link to="/banQuanBaoHuZhiYin">版权保护政策</Link>
                    <span className={ styles.sep }>|</span>
                    <Link to="/yinSiQuanZhengCe">隐私权政策</Link>
                    <span className={ styles.sep }>|</span>
                    <Link to="/ruanJianXuKeXieYi">软件许可协议</Link>
                </div>

            </div >
        );
    }
}

export default MainPage;
import React,{ Component } from 'react' 
import { Button } from 'antd';
// 声明通过props接收的数据类型
interface IProps {
    title: string,
    name ?: string,
    onFatherClick: any
}

// 通过接口声明状态
interface IState {
     count: number,
}

class Home extends Component<IProps,IState>{

    public constructor(props: IProps){
        super(props)
        this.state = {
            count: 10000
        }

        this.countChange = this.countChange.bind(this)
        this.senChild = this.senChild.bind(this)
    }
    senChild = () => {
        this.props.onFatherClick('子控制父事件--->子向父传递数据')
    }
    countChange = () => {
        this.setState({
            count: 20000
        })
    }
    public render(){
        const { title } = this.props
        return(
            <>
                <div>
                    homePage：{title}
                </div>
                <div>
                    count: {this.state.count}
                </div>
                <Button type="primary" onClick={ this.countChange }>修改count</Button>
                <br/>
                <br/>
                <Button type="primary" onClick={ this.senChild }>childSend</Button>
            </>
        )
    }
}

export default Home
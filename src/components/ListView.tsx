import React,{ Component } from 'react' 

// 声明通过props接收的数据类型
interface IProps {
    data: {
        uid: string,
        name: string
    }
}

class ListView extends Component<IProps>{
    
    render(){
        const { uid, name } = this.props.data
        return(
            <>
                <p>uid：{uid}----name：{name}</p>
            </>
        )
    }
}
export default ListView
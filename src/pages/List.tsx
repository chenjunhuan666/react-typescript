import React, { Component } from 'react'
import ListView from '../components/ListView'
interface IState {
    dataInfo: {
        listData: any
    }
}

class List extends Component<{},IState>{
    constructor(props: any){
        super(props)
        this.state = {
            dataInfo: {
                listData:[
                    {
                        uid: '01',
                        name: '张三'
                    },
                    {
                        uid: '02',
                        name: '李四'
                    },
                    {
                        uid: '03',
                        name: '王五'
                    },
                    {
                        uid: '04',
                        name: '赵六'
                    },
                    {
                        uid: '05',
                        name: '孙七'
                    }
                ]
            }
        }
    }

    render(){
        return(
            <>
                {this.state.dataInfo.listData && this.state.dataInfo.listData.map((item: any,index: any) => {
                    return <ListView key={index} data={item} />
                })}
            </>
        )
    }
}

export default List
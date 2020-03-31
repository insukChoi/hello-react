import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // state 의 초기값 설정
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }

    render() {
        const { number, fixedNumber } = this.state; // state 를 조회할 떄는 this.state 로 조회합니다.
        const {name} = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick={() => {
                        // this.setState 를 사용하여 state 에 새로운 값을 넣을 수 있습니다.
                        this.setState({ number: number + 1});
                    }}
                >
                    +1
                </button>
            </div>
        );
    }

}

export default Counter;

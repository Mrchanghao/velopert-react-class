import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            home
            <button onClick={() => {
                // ex) 로그인 등이 성공 했을 때 특정 경로로 이동 시키는 로직
                history.push('/about/javascript')
            }}>Hoem</button>
        </div>
    )
};

export default Home;
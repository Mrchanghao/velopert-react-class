import React from 'react'
import {Route} from 'react-router-dom';

import {Home, About, Posts} from './pages';
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
      <Menu />
      <Route exact path='/' component={Home} />
      <Route path='/about/:name?' component={About} />
      <Route path='/posts' component={Posts} />
      {/*  :key 값 바로 뒤에 ?를 붙이면 
      key 값을 선택적으로 입력 받을 수 있다 */}
      {/* :name  즉 name이라는 params가 생성되었다 
      이 params를 match 프롭으로 상속 시킨다 */}
    </div>
  )
}

export default App;

import { useState, useEffect } from 'react' // ЮЗ ЭФФЕКТ ЭТО ФУНКИЦЯ //принимает в параметры колбек функцию и массив зависимостей (это массив таких переменных на изменение которых будет реагировать юз эффект и выполнять колбэк функцию) ТАК КАК МАССИВ ПУСТОЙ - USE EFFECT ОТРАБОТАЕТ ТОЛЬКО ОДИН РАЗ
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

function App() {
  const [count, setCount] = useState(0)
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setPosts(data))
  }, []) 
  const [posts, setPosts] = useState<Post[]>([]) // это в идеале где useState
  // console.log('render') // при нажатии на кнопку возврашается 2 рендера (2 слова) потому что devMode - после сборки эта функция будет убрана 
  return (
    <> {/** если мы внутри что то напишем (внутри <>(это называется фрагменты) то у нас в elements появится этот див с классом( то что мы внутри бы написали)) */}
    <div>
    {posts.map((post) => {
      return (
        <div>{post.title}</div>
      )
    })} {/** использование метода массива map(возвращает массив в отличие от forEach) (filter, sort, slice) */}
    </div>
      <div>
        <a href="https://vitejs.dev" target="_blank"> {/** таргет бланк  - откроется в новой вкладке */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} 
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

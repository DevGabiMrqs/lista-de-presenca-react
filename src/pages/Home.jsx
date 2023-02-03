import './Home.css'
import Card from '../components/card'
import { useState, useEffect } from 'react';

//USESTATE É O HOOK QUE PERMITE QUE A GENTE CRIE O ESTADO DA APLICAÇÃO
//na const to passando o estado da aplicação, 1º ele(guarda o conteúdo), 2º ele(função q atualiza o estado)
//no parâmetro do state to passando o vetor [], para armazenar os estudantes da minha lista.

function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name:'', avatar:'' })
//vou pegar o user aqui e passar 

  function addStudent(){
   const newStudent = {
    name: studentName,
    time: new Date().toLocaleTimeString("pt-br", {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
   };

  
  setStudents(prevState =>[...prevState, newStudent]);
  //no estado anterior estamos => pegando o estado anterior com o novo estado/novo estudante.
  
  }


  useEffect(() => {
    //corpo do useEffect, e o [] array de dependências.
    fetch('https://api.github.com/users/devgabimrqs')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
    //Quando eu passar a função setUser, eu passo dentro o conteúdo 
    //da variável que eu quero printar do back, nesse caso eu utilizei o
    //data.name para pegar o nome da api, e o data.avatar_url, para passar a minha foto.
  },[]);


  return (
    <div className="container">
      <header>
      <h2>Lista de Presença</h2>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
      </div>
      </header>

      <input
       type="text" 
       name="name" 
       placeholder="digite o nome..."
       onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={addStudent}>Adicionar</button>
      {
      students.map(student => (
      <Card 
      key={student.time}
      name={student.name} 
      time={student.time}
      />
      ))
      //para cada estudante eu quero renderizar um cartão.
      //dentro do component eu passo a key eu coloco 
      }

    </div>
  )
}

export default Home

//aqui vai ser setado o novo estudante da função.
//mas apara ser criado outro card eu utilizo o estado anterior.
//eu despejo o estado anterior dentro do novo estado, para ser um array só ex: [rita e ricardo]
//uso o spread op, para pegar o estado atual do prevState.


//const abre o vetor e usestate()
//O ESTADO TEM DOIS ELEMENTOS:
//1º(studentName) ONDE EU VOU GUARDAR O CONTEÚDO DO ESTADO
//2º(setStudentName) QUE ATUALIZA O ESTADO "SET...""


  
//   let studentName = "";

//   function handleNameChange(name){
//     studentName = name;
//   }

//crio uma função e passo o parâmetro name.
//no OnChange eu passo o event e o setStudentName(atualização) e o valor.
//passo a variável let vazia, e passo studentName no lugar de console.
//Quando quero colocar o conteúdo da variável eu coloco entre chaves.
//Aqui eu puxei no título o {studentName} e to printando o estado da aplicação na tela.
//todo vida que mudo o stado muda ou seja que escrevo rodrigo na caixinha 
//ele é renderizado na tela.
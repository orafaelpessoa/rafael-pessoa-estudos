const Loading = ({msg}) => {
  let img =''
    if(msg == 'Carregando...'){
        img ="../Rocket.gif"
    } else if (msg =='Adicionando nova piada'){
        img ="../Gear.gif"
    } else if(msg =='Deletando Piada'){
      img = "../Deleting.gif"
    }
  
    return (
    <div className="flex justify-center flex-col items-center h-svh">{msg}
    <img src={img} className="w-16 h-16 "  />
    </div>
  )
}

export default Loading
function Message(){

  const myName = '';
  if(myName)
    return <h1>Hello {myName}</h1>;
  
  return <h1>Hello World</h1>;

}

export default Message;
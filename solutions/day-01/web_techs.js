const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]
  const sass = webTechs.includes("Sass")
  if(sass===true){
      return console.log("Sass is a CSS preprocess"); 
  } 
  else {
    webTechs.push("Sass")
    return console.log(webTechs)
  }  
  
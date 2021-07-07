const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ];
 
  const ethiopia = countries.includes("Ethiopia")
  if(ethiopia===true){
      return console.log("ETHIOPIA"); 
  } 
  else {
      countries.push("Ethiopia")
      return console.log(countries); 
  }

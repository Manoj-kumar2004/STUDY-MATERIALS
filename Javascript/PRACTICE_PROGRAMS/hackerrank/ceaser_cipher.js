function isUpper(input)
{
    return input===input.toUpperCase(input);
}

function getKeyByValue(object, value) {
    return  Object.keys(object).find(key => object[key] === value);
  }
  function caesarCipher(s, k) {
  let alphabets = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5,
      'f': 6,
      'g': 7,
      'h': 8,
      'i': 9,
      'j': 10,
      'k': 11,
      'l': 12,
      'm': 13,
      'n': 14,
      'o': 15,
      'p': 16,
      'q': 17,
      'r': 18,
      's': 19,
      't': 20,
      'u': 21,
      'v': 22,
      'w': 23,
      'x': 24,
      'y': 25,
      'z': 26
  },replace=0, temp=s.split(''),keys=Object.keys(alphabets);
  for(let i=0;i<temp.length;i++)
  {
   if(keys.includes(temp[i].toLowerCase())){   
      replace=alphabets[temp[i].toLowerCase()]+k;
      if(replace>26)
      {
          replace%=26;
      }
      if(!replace)replace=26;
      if(isUpper(temp[i]))
      {
        temp[i]=temp[i].toLowerCase();
        temp[i]=getKeyByValue(alphabets,replace).toUpperCase();

      }
      else temp[i]=getKeyByValue(alphabets,replace);
    }
  }
  return(temp.join(''));
  
  }
 
  console.log( caesarCipher('1234567abcdefghijklmnopqrstuvwxyz',1))
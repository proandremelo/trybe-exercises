//////////////// 1 //////////////

function verificaPalindrome(palavra) {
  let tamanhoPalavra = palavra.length;
  let metade1 = palavra.slice(0, Math.round(tamanhoPalavra / 2));
  let metade2 = palavra.slice(Math.round(tamanhoPalavra / 2) - 1).split('').reverse().join('');
  if (metade1 === metade2) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara'));

//////////////// 2 //////////////

//////////////// 3 //////////////

//////////////// 4 //////////////

//////////////// 5 //////////////

//////////////// 6 //////////////

//////////////// 7 //////////////

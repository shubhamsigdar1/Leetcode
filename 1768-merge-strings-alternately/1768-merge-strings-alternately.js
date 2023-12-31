/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let result="";
  let length=Math.max(...[word1.length,word2.length]);
  for(let i=0;i<length;i++){
    if(word1[i]){
      result=result+word1[i];
    }
    if(word2[i]){
      result=result+word2[i];
    }
  }
  return result;
};
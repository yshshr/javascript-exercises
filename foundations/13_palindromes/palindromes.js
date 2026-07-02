const palindromes = function (str) {
  // 只保留数字和字母
  const numberAndCharactor = '1234567890abcdefghijklmnopqrstuvwxyz';

  // 转成小写
  str = str.toLowerCase();

  // 去除非数字和字母内容
  const strarr = str.split('').filter(c=>{
    return numberAndCharactor.includes(c);
  });
  const handleStr = strarr.join('');

  // 翻转字符串并比较
  return handleStr === handleStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

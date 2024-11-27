// // 1. Satrni teskari qilish
// function qaytariw(str) {
//   return str.split('').reverse().join('');
// }

// // 2. So‘zlarni joyini almashtirish
// function wordss(str) {
//   const words = str.split(' ');
//   const first = words.shift();
//   const last = words.pop();
//   words.unshift(last);
//   words.push(first);
//   return words.join(' ');
// }

// // 3. Bosh harflarni sanash
// function eper(str) {
//   return str.split('').filter(char => char === char.toUpperCase() && char !== ' ').length;
// }

// // 4. Bosh harfni katta qilish
// function abs(str) {
//   return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// // 5. Belgini almashtirish
// function aab(a, b, c) {
//   return a.split(b).join(c);
// }

// // 6. So‘zlarni hisoblash
// function countWords(str) {
//   return str.split(' ').length;
// }

// // 7. Palindromni tekshirish
// function isPalindrome(str) {
//   const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   return cleaned === cleaned.split('').reverse().join('');
// }

// // 8. So‘zlarni teskari qilish
// function qaytariwWords(str) {
//   return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }

// // 9. Qayta takrorlanadigan so‘zlarni o‘chirish
// function removeDuplicates(str) {
//   const words = str.split(' ');
//   const uniqueWords = [...new Set(words)];
//   return uniqueWords.join(' ');
// }

// // 10. Belgi indeksini topish
// function indexiniTopish(str, a) {
//   return str.indexOf(a);
// }

// // 11. Unli harflarni o‘chirish
// function removeVowels(str) {
//   return str.replace(/[aeiouAEIOU]/g, '');
// }

// // 12. So‘zlarni tartiblash
// function sortlaw(str) {
//   return str.split(' ').sort().join(' ');
// }

// // 13. Eng uzun so‘zni topish
// function findLongestWord(str) {
//   return str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
// }

// // 14. Satrni qisqartirish
// function engkicigi(str, b) {
//   return str.length > b ? str.slice(0, b) + '...' : str;
// }

// // 15. Unli va undoshlarni sanash
// function countVowelsConsonants(str) {
//   const vowels = str.match(/[aeiouAEIOU]/g)?.length || 0;
//   const consonants = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
//   return { vowels, consonants };
// }

// // 16. So‘zlarni birlashtirish
// function qoshiw(str, a) {
//   return str.split(' ').join(a);
// }

// // 17. Satrni katta harfga o‘tkazish
// function abs(str) {
//   return str.toUpperCase();
// }

// // 18. Raqamlarni ajratib olish
// function extractNumbers(str) {
//   return str.match(/\d+/g)?.map(Number) || [];
// }

// // 19. Satrni sozlash
// function boshJoylar(str) {
//   return str.trim();
// }

// // Massivga oid funksiyalar
// // 20. Eng katta qiymatni topish
// function abbs(arr, key) {
//   return Math.max(...arr.map(obj => obj[key]));
// }

// // 21. Kalit bo‘yicha saralash
// function kalitlari(arr, key) {
//   return arr.sort((a, b) => a[key] - b[key]);
// }

// // 22. Kalit qiymatlarini yig‘ish
// function kalit(arr, key) {
//   return arr.reduce((sum, obj) => sum + obj[key], 0);
// }

// // 23. Ma'lum shart bo‘yicha filtrlash
// function filtter(arr, key, a) {
//   return arr.filter(obj => obj[key] === a);
// }

// // 24. Unikal qiymatlarni ajratib olish
// function uniqueValues(arr, key) {
//   return [...new Set(arr.map(obj => obj[key]))];
// }

// // 25. Kalitni qo‘shish
// function add(arr, a, b) {
//   return arr.map(obj => ({ ...obj, [a]: b }));
// }

// // 26. Obyektni yangilash
// function yngilash(arr, key, updates) {
//   return arr.map(obj => obj.key === key ? { ...obj, ...updates } : obj);
// }

// // 27. Ma'lum obyektni o‘chirish
// function ochirish(arr, key, value) {
//   return arr.filter(obj => obj[key] !== value);
// }

// // 28. Obyektlar sonini sanash
// function countObjectsByKey(arr, key) {
//   return arr.reduce((counts, obj) => {
//       counts[obj[key]] = (counts[obj[key]] || 0) + 1;
//       return counts;
//   }, {});
// }

// // 29. Massivni obyektga aylantirish
// function groupBy(arr, key) {
//   return arr.reduce((result, obj) => {
//       (result[obj[key]] = result[obj[key]] || []).push(obj);
//       return result;
//   }, {});
// }

// export {
//   wordss,
//   eper,
//   aab,
//   countWords,
//   qaytariw,
//   indexiniTopish,
//   sortlaw,
//   engkicigi,
//   qoshiw,
//   abs,
//   boshJoylar,
//   abbs,
//   kalitlari,
//   kalit,
//   filtter,
//   add,
//   yngilash,
//   ochirish
// };



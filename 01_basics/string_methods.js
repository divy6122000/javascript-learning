
/*
1. at() - Returns the character at the specified index, allowing for negative indices.
       str.at(index);

2. charAt() - Returns the character at the specified index.
          str.charAt(index);

3. charCodeAt() - Returns the Unicode of the character at the specified index.
               str.charCodeAt(index);

4. codePointAt() - Returns the Unicode code point value of the character at the specified position.
                str.codePointAt(index);

5. concat() - Combines two or more strings into one string.
           str.concat(string2, string3, ...);

6. endsWith() - Checks if a string ends with a specified substring.
             str.endsWith(searchString, length);

7. includes() - Checks if a string contains a specified substring.
             str.includes(searchString, position);

8. indexOf() - Returns the index of the first occurrence of a specified substring.
            str.indexOf(searchString, fromIndex);

9. isWellFormed() - Returns true if the string is well-formed. (Note: This is not widely supported yet.)
                 str.isWellFormed();

10. lastIndexOf() - Returns the index of the last occurrence of a specified substring.
                str.lastIndexOf(searchString, fromIndex);

11. localeCompare() - Compares two strings in the current locale.
                   str.localeCompare(compareString, locales, options);

12. match() - Matches a string against a regular expression.
          str.match(regexp);

13. matchAll() - Returns an iterator of all matches of a regular expression.
             str.matchAll(regexp);

14. normalize() - Returns the Unicode Normalization Form of a string.
              str.normalize(form);

15. padEnd() - Pads the end of the string with another string to a specified length.
           str.padEnd(targetLength, padString);

16. padStart() - Pads the start of the string with another string to a specified length.
            str.padStart(targetLength, padString);

17. repeat() - Returns a new string with a specified number of repetitions.
           str.repeat(count);

18. replace() - Replaces the first occurrence of a substring or pattern with a new substring.
            str.replace(searchValue, newValue);

19. replaceAll() - Replaces all occurrences of a substring or pattern with a new substring.
               str.replaceAll(searchValue, newValue);

20. search() - Searches for a match between a regular expression and the string.
           str.search(regexp);

21. slice() - Extracts a section of a string and returns it as a new string.
          str.slice(beginIndex, endIndex);

22. split() - Splits a string into an array of substrings.
          str.split(separator, limit);

23. startsWith() - Checks if a string starts with a specified substring.
               str.startsWith(searchString, position);

24. substring() - Returns a new string that is a subset of the original string.
              str.substring(indexStart, indexEnd);

25. toLocaleLowerCase() - Converts a string to lowercase according to the host's current locale.
                      str.toLocaleLowerCase(locales);

26. toLocaleUpperCase() - Converts a string to uppercase according to the host's current locale.
                      str.toLocaleUpperCase(locales);

27. toLowerCase() - Converts a string to lowercase.
                str.toLowerCase();

28. toUpperCase() - Converts a string to uppercase.
                str.toUpperCase();

29. trim() - Removes whitespace from both ends of a string.
         str.trim();

30. trimEnd() / trimRight() - Removes whitespace from the end of a string.
                          str.trimEnd();

31. trimStart() / trimLeft() - Removes whitespace from the start of a string.
                           str.trimStart();

32. valueOf() - Returns the primitive value of a String object.
            str.valueOf();

*/
const gameName = new String("Gta-vice-city")

// 1.anchor -------------------------------------------------------------------------------------- deperecated
// console.log(gameName.anchor('this')); // <a name="this">Gta-vice-city</a>
// Note: below method is deprecated we should not use in modern js

//use like
// const anchorEle = document.createElement('a')
// anchorEle.href = `https://google.com`
// anchorEle.name = `this` // it's deperecated
// anchorEle.textContent = gameName
// document.body.innerHTML = anchorEle

// 2.at -------------------------------------------------------------------------------------------
// console.log(gameName.at(0)); // G

// 3.charAt -------------------------------------------------------------------------------------------
// console.log(gameName.charAt(2)); // a

// 4.charCodeAt -------------------------------------------------------------------------------------------
// returns the Unicode value (an integer)
// console.log(gameName.charCodeAt(2)); // 97

// 5.codePointAt -------------------------------------------------------------------------------------------
//  similar to charCodeAt(), but it can handle characters that are represented by more than one 16-bit code unit includes emojis and some special characters
// console.log(gameName.codePointAt(2)); // 97

// 6.concat -------------------------------------------------------------------------------------------
//  to merge two or more strings together
  const additionalText = " is a popular game"
  const additionalText2 = " ever."
// console.log(gameName.concat(additionalText,additionalText2)); // Gta-vice-city is a popular game ever.

// 7.endsWith -------------------------------------------------------------------------------------------
// console.log(gameName.endsWith("Gta")); // false
// console.log(gameName.endsWith("city")); // true
// console.log(gameName.endsWith("ty")); // true

// 8.includes -------------------------------------------------------------------------------------------
// console.log(gameName.includes("Gta")); // true
// console.log(gameName.includes("Gta2")); // false

// 9.indexOf -------------------------------------------------------------------------------------------
// console.log(gameName.indexOf("vice")); // 4
// console.log(gameName.indexOf("Vice")); // -1 //means no index found

// 10.lastIndexOf -------------------------------------------------------------------------------------------
// console.log(gameName.lastIndexOf("y")); // 12

// 11.localeCompare -------------------------------------------------------------------------------------------
// const a = "Gta-vice-city"
// console.log(a.localeCompare(gameName, 'en', { sensitivity: 'base' }));
// console.log(a.localeCompare(gameName));

// 12.match -------------------------------------------------------------------------------------------
// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);

// 13.replace -------------------------------------------------------------------------------------------
// console.log(gameName.replace("Gta","divy"));//divy-vice-city
// console.log(gameName.replace("gta","divy"));//Gta-vice-city

// 14.replaceAll -------------------------------------------------------------------------------------------
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replaceAll('dog', 'monkey')); //I think Ruth's monkey is cuter than your monkey!

// 15.replaceAll -------------------------------------------------------------------------------------------
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.search(/[^\w\s']/g)); //

// 16.slice -------------------------------------------------------------------------------------------
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.slice(0,14)); //I think Ruth's

// 17.split -------------------------------------------------------------------------------------------

// console.log(gameName.split("-")); // [ 'Gta', 'vice', 'city' ]

// 18.valueOf -------------------------------------------------------------------------------------------
const date2 = new Date();
// console.log(date2);
const date = new Date().getTime()
console.log(Math.floor(date/1000)); //1725197756

console.log(Math.floor(date2.valueOf()/1000)); // 1725197756





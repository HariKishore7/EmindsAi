function firstConsecLongestString(strarr, k) {
    const n = strarr.length;
    if (n === 0 || k > n || k <= 0) {
      return "";
    }
    let longestString = "";
    for (let i = 0; i <= n - k; i++) {
      const currentStr = strarr.slice(i, i + k).join("");
      if (currentStr.length > longestString.length) {
        longestString = currentStr;
      }
    }
    return longestString;
  }
  
  console.log(firstConsecLongestString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],2)); // "abigailtheta"
  console.log(firstConsecLongestString(["hari", "kishore", "tippa"], 1)); // "kishore"
  console.log(firstConsecLongestString(["javascript", "reactjsdev"], 1)); // "javascript"
  console.log(firstConsecLongestString([], 2)); // ""
  console.log(firstConsecLongestString(["data1", "data2", "data3"], 3)); // "data1data2data3"
  console.log(firstConsecLongestString(["america", "america", "acirema"], 1)); // "america"
  console.log(firstConsecLongestString(["america", "america", "acirema", "acirema"], 2)); // "americaamerica"
  console.log(firstConsecLongestString(["america", "america", "acirema", "acirema"], 5)); // ""

// You can run the above code with this link: https://jsbin.com/robexeyupe/edit?js,console

// Time Complexity: O(n),
// Space Complexity: O(n),

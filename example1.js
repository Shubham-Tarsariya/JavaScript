//-------------------------------------JavaScript – Mixed Interview Questions---------------------------------------

// Q1. Increase all prices by 10
console.log("========== Q1: Increase all prices by 10 ==========");
const q1_prices = [100, 200, 300];
const q1_result = q1_prices.map((price) => price + 10);
console.log("Input:", q1_prices);
console.log("Output:", q1_result); // [110, 210, 310]

// Q2. Filter even numbers
console.log("\n========== Q2: Filter even numbers ==========");
const q2_numbers = [1, 2, 3, 4, 5, 6];
const q2_result = q2_numbers.filter((num) => num % 2 === 0);
console.log("Input:", q2_numbers);
console.log("Output:", q2_result); // [2, 4, 6]

// Q3. Check if any number is negative
console.log("\n========== Q3: Check if any number is negative ==========");
const q3_nums = [10, -5, 20];
const q3_result = q3_nums.some((num) => num < 0);
console.log("Input:", q3_nums);
console.log("Output:", q3_result); // true

// Q4. Check if all marks are passing (>=40)
console.log(
  "\n========== Q4: Check if all marks are passing (>=40) ==========",
);
const q4_marks = [45, 60, 70];
const q4_result = q4_marks.every((mark) => mark >= 40);
console.log("Input:", q4_marks);
console.log("Output:", q4_result); // true

// Q5. Find first number greater than 50
console.log("\n========== Q5: Find first number greater than 50 ==========");
const q5_scores = [20, 40, 55, 70];
const q5_result = q5_scores.find((score) => score > 50);
console.log("Input:", q5_scores);
console.log("Output:", q5_result); // 55

// Q6. Calculate total bill amount
console.log("\n========== Q6: Calculate total bill amount ==========");
const q6_bills = [120, 300, 80];
const q6_result = q6_bills.reduce((total, bill) => total + bill, 0);
console.log("Input:", q6_bills);
console.log("Output:", q6_result); // 500

// Q7. Convert hours to minutes
console.log("\n========== Q7: Convert hours to minutes ==========");
const q7_hours = [1, 2, 1.5];
const q7_result = q7_hours.map((hour) => hour * 60);
console.log("Input:", q7_hours);
console.log("Output:", q7_result); // [60, 120, 90]

// Q8. Find first empty string
console.log("\n========== Q8: Find first empty string ==========");
const q8_inputs = ["name", "", "email"];
const q8_result = q8_inputs.find((input) => input === "");
console.log("Input:", q8_inputs);
console.log("Output:", q8_result); // ''

// Q9. Check if any value is zero
console.log("\n========== Q9: Check if any value is zero ==========");
const q9_values = [5, 0, 8];
const q9_result = q9_values.some((val) => val === 0);
console.log("Input:", q9_values);
console.log("Output:", q9_result); // true

// Q10. Double all numbers
console.log("\n========== Q10: Double all numbers ==========");
const q10_nums = [2, 4, 6];
const q10_result = q10_nums.map((num) => num * 2);
console.log("Input:", q10_nums);
console.log("Output:", q10_result); // [4, 8, 12]

// Q11. Extract first two values using destructuring
console.log(
  "\n========== Q11: Extract first two values using destructuring ==========",
);
const q11_data = [10, 20, 30];
const [q11_first, q11_second] = q11_data;
console.log("Input:", q11_data);
console.log("First:", q11_first, "Second:", q11_second); // 10, 20

// Q12. Merge two arrays using spread
console.log("\n========== Q12: Merge two arrays using spread ==========");
const q12_a = [1, 2];
const q12_b = [3, 4];
const q12_result = [...q12_a, ...q12_b];
console.log("Array a:", q12_a);
console.log("Array b:", q12_b);
console.log("Output:", q12_result); // [1, 2, 3, 4]

// Q13. Check if all temperatures are below 50
console.log(
  "\n========== Q13: Check if all temperatures are below 50 ==========",
);
const q13_temps = [30, 40, 45];
const q13_result = q13_temps.every((temp) => temp < 50);
console.log("Input:", q13_temps);
console.log("Output:", q13_result); // true

// Q14. Find first even number
console.log("\n========== Q14: Find first even number ==========");
const q14_nums = [1, 3, 4, 6];
const q14_result = q14_nums.find((num) => num % 2 === 0);
console.log("Input:", q14_nums);
console.log("Output:", q14_result); // 4

// Q15. Calculate total steps walked
console.log("\n========== Q15: Calculate total steps walked ==========");
const q15_steps = [2000, 3000, 1500];
const q15_result = q15_steps.reduce((total, step) => total + step, 0);
console.log("Input:", q15_steps);
console.log("Output:", q15_result); // 6500

// Q16. Filter salaries above 25,000
console.log("\n========== Q16: Filter salaries above 25,000 ==========");
const q16_salaries = [18000, 26000, 30000];
const q16_result = q16_salaries.filter((salary) => salary > 25000);
console.log("Input:", q16_salaries);
console.log("Output:", q16_result); // [26000, 30000]

// Q17. Add bonus of 500 to filtered salaries (>20000)
console.log(
  "\n========== Q17: Add bonus of 500 to filtered salaries (>20000) ==========",
);
const q17_salaries = [15000, 22000, 28000];
const q17_result = q17_salaries
  .filter((salary) => salary > 20000)
  .map((salary) => salary + 500);
console.log("Input:", q17_salaries);
console.log("Output:", q17_result); // [22500, 28500]

// Q18. Total expense after filtering (>100)
console.log(
  "\n========== Q18: Total expense after filtering (>100) ==========",
);
const q18_expenses = [50, 200, 150, 80];
const q18_result = q18_expenses
  .filter((exp) => exp > 100)
  .reduce((total, exp) => total + exp, 0);
console.log("Input:", q18_expenses);
console.log("Output:", q18_result); // 350

// Q19. Check if any score is below class average
console.log(
  "\n========== Q19: Check if any score is below class average ==========",
);
const q19_scores = [60, 70, 80];
const q19_avg = q19_scores.reduce((a, b) => a + b, 0) / q19_scores.length;
const q19_result = q19_scores.some((score) => score < q19_avg);
console.log("Input:", q19_scores);
console.log("Average:", q19_avg); // 70
console.log("Output:", q19_result); // true

// Q20. Find first number divisible by 7
console.log("\n========== Q20: Find first number divisible by 7 ==========");
const q20_nums = [10, 14, 21];
const q20_result = q20_nums.find((num) => num % 7 === 0);
console.log("Input:", q20_nums);
console.log("Output:", q20_result); // 14

// Q21. Convert prices to discounted prices (10%)
console.log(
  "\n========== Q21: Convert prices to discounted prices (10%) ==========",
);
const q21_prices = [500, 1000, 1500];
const q21_result = q21_prices.map((price) => price * 0.9);
console.log("Input:", q21_prices);
console.log("Output:", q21_result); // [450, 900, 1350]

// Q22. Total calories burned (>30 min only)
console.log(
  "\n========== Q22: Total calories burned (>30 min only) ==========",
);
const q22_minutes = [20, 45, 60];
const q22_result = q22_minutes
  .filter((min) => min > 30)
  .reduce((total, min) => total + min, 0);
console.log("Input:", q22_minutes);
console.log("Output:", q22_result); // 105

// Q23. Check if all inputs are filled
console.log("\n========== Q23: Check if all inputs are filled ==========");
const q23_inputs = ["name", "email", "password"];
const q23_result = q23_inputs.every((input) => input !== "");
console.log("Input:", q23_inputs);
console.log("Output:", q23_result); // true

// Q24. Merge 3 arrays using spread
console.log("\n========== Q24: Merge 3 arrays using spread ==========");
const q24_a = [1];
const q24_b = [2];
const q24_c = [3];
const q24_result = [...q24_a, ...q24_b, ...q24_c];
console.log("a:", q24_a, "b:", q24_b, "c:", q24_c);
console.log("Output:", q24_result); // [1, 2, 3]

// Q25. Find first failing mark
console.log("\n========== Q25: Find first failing mark ==========");
const q25_marks = [55, 48, 35, 70];
const q25_result = q25_marks.find((mark) => mark < 40);
console.log("Input:", q25_marks);
console.log("Output:", q25_result); // 35

// Q26. Calculate average marks of passed students
console.log(
  "\n========== Q26: Calculate average marks of passed students ==========",
);
const q26_marks = [30, 45, 60, 80];
const q26_passed = q26_marks.filter((mark) => mark >= 40);
const q26_avg =
  q26_passed.reduce((sum, mark) => sum + mark, 0) / q26_passed.length;
console.log("Input:", q26_marks);
console.log("Passed:", q26_passed);
console.log("Average:", q26_avg.toFixed(2)); // 61.67

// Q27. Square only odd numbers
console.log("\n========== Q27: Square only odd numbers ==========");
const q27_nums = [1, 2, 3, 4, 5];
const q27_result = q27_nums
  .filter((num) => num % 2 !== 0)
  .map((num) => num * num);
console.log("Input:", q27_nums);
console.log("Output:", q27_result); // [1, 9, 25]

// Q28. Check if any value exceeds 1000
console.log("\n========== Q28: Check if any value exceeds 1000 ==========");
const q28_values = [200, 500, 1500];
const q28_result = q28_values.some((val) => val > 1000);
console.log("Input:", q28_values);
console.log("Output:", q28_result); // true

// Q29. Extract first and rest values using destructuring
console.log(
  "\n========== Q29: Extract first and rest values using destructuring ==========",
);
const q29_nums = [10, 20, 30, 40];
const [q29_first, ...q29_rest] = q29_nums;
console.log("Input:", q29_nums);
console.log("First:", q29_first);
console.log("Rest:", q29_rest); // [20, 30, 40]

// Q30. Total reward points (>=8 hours only)
console.log(
  "\n========== Q30: Total reward points (>=8 hours only) ==========",
);
const q30_hours = [6, 8, 9, 7];
const q30_result = q30_hours
  .filter((hour) => hour >= 8)
  .reduce((total, hour) => total + hour, 0);
console.log("Input:", q30_hours);
console.log("Output:", q30_result); // 17

// Q31. Find first word longer than 4 characters
console.log(
  "\n========== Q31: Find first word longer than 4 characters ==========",
);
const q31_words = ["hi", "hello", "world"];
const q31_result = q31_words.find((word) => word.length > 4);
console.log("Input:", q31_words);
console.log("Output:", q31_result); // 'hello'

// Q32. Check if all numbers are even
console.log("\n========== Q32: Check if all numbers are even ==========");
const q32_nums = [2, 4, 6, 8];
const q32_result = q32_nums.every((num) => num % 2 === 0);
console.log("Input:", q32_nums);
console.log("Output:", q32_result); // true

// Q33. Combine arrays and filter positives
console.log("\n========== Q33: Combine arrays and filter positives ==========");
const q33_a = [1, -2];
const q33_b = [3, -4];
const q33_result = [...q33_a, ...q33_b].filter((num) => num > 0);
console.log("Array a:", q33_a);
console.log("Array b:", q33_b);
console.log("Output:", q33_result); // [1, 3]

// Q34. Total bill after tax (5%)
console.log("\n========== Q34: Total bill after tax (5%) ==========");
const q34_prices = [200, 400];
const q34_total = q34_prices.reduce((sum, price) => sum + price, 0);
const q34_result = q34_total * 1.05;
console.log("Input:", q34_prices);
console.log("Before tax:", q34_total);
console.log("After 5% tax:", q34_result); // 630

// Q35. Find first temperature above average
console.log(
  "\n========== Q35: Find first temperature above average ==========",
);
const q35_temps = [20, 30, 40];
const q35_avg = q35_temps.reduce((a, b) => a + b, 0) / q35_temps.length;
const q35_result = q35_temps.find((temp) => temp > q35_avg);
console.log("Input:", q35_temps);
console.log("Average:", q35_avg); // 30
console.log("Output:", q35_result); // 40

// Q36. Combine arrays, keep even numbers, find sum
console.log(
  "\n========== Q36: Combine arrays, keep even numbers, find sum ==========",
);
const q36_a = [1, 2, 3];
const q36_b = [4, 5, 6];
const q36_result = [...q36_a, ...q36_b]
  .filter((num) => num % 2 === 0)
  .reduce((sum, num) => sum + num, 0);
console.log("Array a:", q36_a);
console.log("Array b:", q36_b);
console.log("Output:", q36_result); // 12 (2+4+6)

// Q37. Check if every score is above average
console.log(
  "\n========== Q37: Check if every score is above average ==========",
);
const q37_scores = [60, 70, 80];
const q37_avg = q37_scores.reduce((a, b) => a + b, 0) / q37_scores.length;
const q37_result = q37_scores.every((score) => score > q37_avg);
console.log("Input:", q37_scores);
console.log("Average:", q37_avg);
console.log("Output:", q37_result); // false

// Q38. Find first transaction above total average
console.log(
  "\n========== Q38: Find first transaction above total average ==========",
);
const q38_tx = [100, 500, 900];
const q38_avg = q38_tx.reduce((a, b) => a + b, 0) / q38_tx.length;
const q38_result = q38_tx.find((t) => t > q38_avg);
console.log("Input:", q38_tx);
console.log("Average:", q38_avg);
console.log("Output:", q38_result); // 500

// Q39. Total of squared even numbers
console.log("\n========== Q39: Total of squared even numbers ==========");
const q39_nums = [1, 2, 3, 4, 5];
const q39_result = q39_nums
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log("Input:", q39_nums);
console.log("Output:", q39_result); // 20 (4 + 16)

// Q40. Merge arrays, remove negatives, total sum
console.log(
  "\n========== Q40: Merge arrays, remove negatives, total sum ==========",
);
const q40_a = [-1, 2];
const q40_b = [3, -4];
const q40_result = [...q40_a, ...q40_b]
  .filter((num) => num > 0)
  .reduce((sum, num) => sum + num, 0);
console.log("Array a:", q40_a);
console.log("Array b:", q40_b);
console.log("Output:", q40_result); // 5 (2+3)

// Q41. Check if any value is prime
console.log("\n========== Q41: Check if any value is prime ==========");
const q41_nums = [4, 6, 9, 11];
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) if (n % i === 0) return false;
  return true;
};
const q41_result = q41_nums.some((num) => isPrime(num));
console.log("Input:", q41_nums);
console.log("Output:", q41_result); // true (11 is prime)

// Q42. Calculate weighted total (double values >50)
console.log(
  "\n========== Q42: Calculate weighted total (double values >50) ==========",
);
const q42_values = [30, 60, 80];
const q42_result = q42_values
  .map((val) => (val > 50 ? val * 2 : val))
  .reduce((sum, val) => sum + val, 0);
console.log("Input:", q42_values);
console.log("Output:", q42_result); // 310 (30 + 120 + 160)

// Q43. Find first value greater than cumulative sum
console.log(
  "\n========== Q43: Find first value greater than cumulative sum ==========",
);
const q43_nums = [10, 20, 50];
let cumSum = 0;
const q43_result = q43_nums.find((num) => {
  if (num > cumSum) return true;
  cumSum += num;
  return false;
});
console.log("Input:", q43_nums);
console.log("Output:", q43_result); // 50

// Q44. Total salary payout after bonus and tax
console.log(
  "\n========== Q44: Total salary payout after bonus and tax ==========",
);
const q44_salaries = [20000, 30000];
const q44_result =
  q44_salaries
    .map((sal) => sal + 5000) // bonus
    .reduce((sum, sal) => sum + sal, 0) * 0.85; // 15% tax
console.log("Input:", q44_salaries);
console.log("Output:", q44_result); // 42250

// Q45. Check if all prices are within budget (<=1000)
console.log(
  "\n========== Q45: Check if all prices are within budget (<=1000) ==========",
);
const q45_prices = [400, 800, 1200];
const q45_result = q45_prices.every((price) => price <= 1000);
console.log("Input:", q45_prices);
console.log("Output:", q45_result); // false

// Q46. Combine arrays and find maximum value
console.log(
  "\n========== Q46: Combine arrays and find maximum value ==========",
);
const q46_a = [10, 40];
const q46_b = [30, 20];
const q46_combined = [...q46_a, ...q46_b];
const q46_result = Math.max(...q46_combined);
console.log("Array a:", q46_a);
console.log("Array b:", q46_b);
console.log("Output:", q46_result); // 40

// Q47. Find first value failing custom rule (>2×avg)
console.log(
  "\n========== Q47: Find first value failing custom rule (>2×avg) ==========",
);
const q47_nums = [10, 20, 60];
const q47_avg = q47_nums.reduce((a, b) => a + b, 0) / q47_nums.length;
const q47_result = q47_nums.find((num) => num <= q47_avg * 2);
console.log("Input:", q47_nums);
console.log("Average:", q47_avg);
console.log("Output:", q47_result); // 10 or 20

// Q48. Total distance after bonus km (>5 only)
console.log(
  "\n========== Q48: Total distance after bonus km (>5 only) ==========",
);
const q48_km = [3, 6, 10];
const q48_result = q48_km
  .filter((k) => k > 5)
  .map((k) => k + 2)
  .reduce((sum, k) => sum + k, 0);
console.log("Input:", q48_km);
console.log("Output:", q48_result); // 20 (8+12)

// Q49. Check if every element is unique
console.log("\n========== Q49: Check if every element is unique ==========");
const q49_nums = [1, 2, 3, 2];
const q49_result = q49_nums.length === new Set(q49_nums).size;
console.log("Input:", q49_nums);
console.log("Output:", q49_result); // false

// Q50. FINAL BOSS – Merge, filter, square, sum
console.log(
  "\n========== Q50: FINAL BOSS – Merge, filter, square, sum ==========",
);
const q50_a = [1, 2, 3];
const q50_b = [4, 5, 6];
const q50_avg =
  q50_a.concat(q50_b).reduce((a, b) => a + b, 0) /
  (q50_a.length + q50_b.length);
const q50_result = [...q50_a, ...q50_b]
  .filter((num) => num > q50_avg)
  .map((num) => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log("Array a:", q50_a);
console.log("Array b:", q50_b);
console.log("Combined average:", q50_avg);
console.log("Output:", q50_result); // 86 (16+25+36)


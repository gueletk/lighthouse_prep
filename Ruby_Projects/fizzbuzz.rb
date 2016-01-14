=begin
Write a program that prints the numbers from 1 to 100. For the multiples of 3, print "Fizz" instead of the number and for the multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz"

Notes:

Write this code using your Sublime Text editor inside your work folder.
Create a directory inside the work folder called something like fizzbuzz
Push your code to GitHub, just like you did previously with the recipe project
=end

for i in 1..100
	if i%5==0 && i%3==0
		print "FizzBuzz"
	elsif i%5==0 
		print "Buzz"
	elsif i%3==0
		print "Fizz"
	else
		print i
	end
end
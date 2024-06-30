// Strings represent text
'hello'
// We use strings inside popups
alert('hello')

// The sintax uses ''
// We can add strings together
'some' + 'text'
> 'sometext'
// This is called Concatenation
'some' + 'more' +'text'
>'somemoretext'

// Strings and numbers are differente types of values
// We can check the type of value
typeof 2
> 'number'
typeof 'hello'
> 'string'
// Type coercion is when JS convert one number to a string
typeof 'hello' + 3
> 'hello3'

// To create the price
'$' + 20.95 + 7.99
> '$20.957.99'
// This doesn't work, because it combine the numbers instead of add them
'$' + (2095 + 799) / 100
> '$28.94'

'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
> 'Items (2): $28.94'

// Once we combine the string, we can use it in other functions
alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);

// There are 3 ways to create a string:
// 1.- ' ' - Easier to type
"'I'm learnign JavaScript'"
> Error
// 2.- " " - When we have a '' inside the string
"I'm learning JavaScript"
> "I'm learning JavaScript"
// 3.- Scape character - It means just '
// \' = ', \" = ". \n = space
"I\'m learning JavaScript"
> "I'm learning JavaScript"
// 4.- Template strings `` - Interpolation
// ${...} Allows to insert calculations in the string
`Items (${1 + 1}): $${(2095 + 799) / 100}`
> 'Items (2): $28.94'
// It is the recommended solution to insert values into string

// Multi line strings
`some
text`
> 'some\ntext'

// '...' By default and `...` for interpolation and multi-line
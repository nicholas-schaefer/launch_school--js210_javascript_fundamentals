[1, 2, ["a", ["b", false]], null, {}]

1       -integer                -primitive
2       -integer                -primitive
"a"     -string                 -primitive
"b"     -string                 -primitive
false   -boolean                -primitive
null    -null                   -primitive
{}      -simple object          -object

[1, 2, ["a", ["b", false]], null, {}] -array -object
["a", ["b", false]]  -array     -object
["b", false]         -array     -object

6 primitives(integers, strings, boolean, null)
4 objects (all arrays)
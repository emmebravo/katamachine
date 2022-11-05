/*
	7
     23      3
   5   4   18  21

*/

/*
PRE ORDER TRAVERSAL: first visit node, then recurse
visitNode() --> root
recurse()

console.log: 7, 23, 5 (nothing further down, so pop up to 23), 4 (nothing further, so pop to 23 then to 7), 3, 18, 21

7, 23, 5, 4, 3, 18, 21

IN ORDER TRAVERSAL:
recurseLeft()
visitNode() --> root
recurseRight()
^^ changes order in which we visit nodes

go to 7, recurseLeft, go to 23, recurseLeft, go to 5

console.log: 5 (nothing to recurse, pop), 23 (go to recurseRight), (nothing to recurseLeft) 4 (pop up), 7 (recurseRight), 3, 18, 21

5, 23, 4, 7, 18, 3, 21

POST ORDER TRAVERSAL:
recurseLeft()
recurseRight()
visitNode() --> root

go to 7, recurse left, 23, recurseLeft, print 5, nothing left, pop up to 23, recurseRight, print 4, pop up, print 23, pop up, recurseRight, 3, recurseLeft, print 18, pop up, 3, recurseRight, print 21, pop up, print 3, pop up, print 7

console.log: 5, 4, 23, 18, 21, 3, 7

*/

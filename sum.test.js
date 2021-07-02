const greet = require('./sum.js');


test ('greet {name}', () => {expect(greet('carlo')).toMatch('Hello carlo')});

test ('greet name null val', () => {expect(greet()).toMatch('Hello there!')});

test ('greet name in caps', () => {expect(greet('JOSE')).toMatch('HELLO JOSE!')});

test ('greet name array small', () => {expect (greet(['jose','pep'])).toMatch('Hello,jose,pep')});

test ('greet name array loop', () => {expect(greet(['jose', 'pep', 'blah', 'boo'])).toMatch('Hello,jose,pep,blah,boo')});

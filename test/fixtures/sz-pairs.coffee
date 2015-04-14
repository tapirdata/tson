module.exports = [
  ['abc', 'abc']
  ['', '#']
  ['a[b]c', 'a`ab`ec']
  [3, '#3']
  [true, '#t']
  [false, '#f']
  [null, '#n']
  [undefined, '#u']
  ['ab:c', 'ab`ic']
  # array
  [['ab'], '[ab]']
  [[], '[]']
  [['a',''], '[a|#]']
  [['ab', 'c'], '[ab|c]']
  [['ab', 3, true, 'c', null], '[ab|#3|#t|c|#n]']
  # object
  [{}, '{}']
  [{a: 'aa', '': 'bb'}, '{#:bb|a:aa}']
  [{a: 'aa', b: 'bb'}, '{a:aa|b:bb}']
  [{a: 3, b: 4}, '{a:#3|b:#4}']
  [{a: '3', b: true}, '{a:3|b}']
  [{a: '3', b: null}, '{a:3|b:#n}']
  # complex
  [[[]], '[[]]']
  [[[],[]], '[[]|[]]']
  [[{}], '[{}]']
  [{y:[], x:true}, '{x|y:[]}']
  [{a:{}}, '{a:{}}']
  [{a:{a:['b',{c:3}],b:{c:[8,2]}}}, '{a:{a:[b|{c:#3}]|b:{c:[#8|#2]}}}']
  [{'[a]':'[b]'}, '{`aa`e:`ab`e}']
  # fail
  ['__fail__', '']
  ['__fail__', '#123x']
  ['__fail__', '#[x]']
  ['__fail__', '[']
  ['__fail__', ']']
  ['__fail__', '}']
  ['__fail__', '{']
  ['__fail__', '|']
  ['__fail__', ':']
  ['__fail__', 'a#b']
  ['__fail__', 'a|b']
  ['__fail__', 'a[b]']
  ['__fail__', '[]]']
  ['__fail__', '[a:4]']
  ['__fail__', '{[}]']
  ['__fail__', '[|]']
  ['__fail__', '[a|]']
  ['__fail__', '[|a]']
  ['__fail__', '{|}']
  ['__fail__', '{|a}']
  ['__fail__', '{a|}']
  ['__fail__', '{|a:b}']
  ['__fail__', '{a:b|}']
  ['__fail__', '{a:}']
  ['__fail__', '{a:b:}']
]


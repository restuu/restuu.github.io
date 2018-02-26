// 1. newton second law

store "force" with 0
store "mass" with 600
store "acceleration" with 2

calculate 'mass' * 'acceleration'
set 'force' with result

display 'force'

// 2. tahun kabisat

store 'year' with 0

if 'year' % 4

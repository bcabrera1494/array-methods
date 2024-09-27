let toCamelize = {
    1: 'jeremy-allen-white',
    2: 'olivia-newton-john',
    3: 'james-earl-jones',
    4: 'kopi-joe-widdle',
    5: 'mary-tyler-moore',
    6: 'mary-j-blige',
    7: 'catherine-zeta-jones',
};
function camelize(str){
    let split = str.split('-');
    return split;
}

console.log(toCamelize);
console.log(toCamelize.isArray);
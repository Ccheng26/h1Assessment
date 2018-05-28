export function mergeByEmp(array) {
    var check = new RegExp('["\']([^\'"]*)[\'"][^:]*:[^"\']*["\']([^\'"]*)[\'"]', "g");
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        if (array[i].hasOwnProperty('emp_title')) {
            try {
                if (obj.hasOwnProperty(array[i].emp_title.replace(check))) {
                    obj[array[i].emp_title].push(array[i])
                } else {
                    obj[array[i].emp_title.replace(check)] = [array[i]]
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
    return obj
}

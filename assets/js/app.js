let app = new Vue({
    el: '#appRoot',
    data: {
        firstName : "bas",
        secondName : "vino",
        result: ""
    },
    methods: {
        resetData(){
            this.firstName = ""
            this.secondName = ""
        },
        playTheGame() {
            if(this.firstName == "" || this.secondName == "") {
                alert('Please provide the names')
                return false
            }

            let reLength = this.findDiff(this.firstName, this.secondName)
            let theLetter = this.findFlames(reLength) 
            let flamesObj = {
                'f' : 'Friend',
                'l' : 'Love',
                'a' : 'Affection',
                'm' : 'Marriage',
                'e' : 'Enemy',
                's' : 'Sister',
            }

            this.result = flamesObj[theLetter]
        },
        findDiff(str1, str2){ 
            let copyStr1 = str1

            copyStr1.split('').forEach(function(val, i){
              if(str2.split('').includes(val))  {
                str2 = str2.replace(val, '')
                str1 = str1.replace(val, '')
              }   
            })

            return str1.length + str2.length;
        },
        findFlames(length) {
            let fName = "flames"

            for(let i=0; ;i++){
                let count = length % fName.length

                if(count == 1) {
                    fName = fName.substring(1);
                } else {
                   let oldFName = fName.split('')
                   let newFName = oldFName.splice(count)
                   let mergeName = newFName.concat(oldFName)
                   mergeName.pop()
                   fName = mergeName.join('')
                }

                if(fName.split('').length == 1)
                break
            }

            return fName            
        }
    }
})
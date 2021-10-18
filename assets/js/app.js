let app = new Vue({
    el: '#appRoot',
    data: {
        firstName : "",
        secondName : "",
        result: {
            name: "",
            icon: ""
        },
        error : {
            firstName : false,
            secondName : false
        }
    },
    methods: {
        resetData(){
            this.firstName = ""
            this.secondName = ""
            this.error.firstName = false
            this.error.secondName = false
            this.result.name = ""
            this.result.icon = ""
        },
        playTheGame() {
        
            if(this.firstName == "")
                this.error.firstName = true
            else
                this.error.firstName = false

            if(this.secondName == "")
                this.error.secondName = true
            else
                this.error.secondName = false

            if(this.firstName == "" || this.secondName == "") 
                return false

            let reLength = this.findDiff(this.firstName, this.secondName)
            let theLetter = this.findFlames(reLength) 
            let flamesObj = {
                'f' : {
                    name : 'Friend',
                    icon : 'far fa-laugh fa-3x text-primary'
                },
                'l' : {
                    name : 'Love',
                    icon : 'far fa-grin-hearts fa-3x text-success'
                },
                'a' : {
                    name : 'Affection',
                    icon : 'far fa-kiss fa-3x text-success'
                },
                'm' : {
                    name : 'Marriage',
                    icon : 'far fa-kiss-wink-heart fa-3x text-success'
                },
                'e' : {
                    name : 'Enemy',
                    icon : 'far fa-tired fa-3x text-danger'
                },
                's' : {
                    name : 'Sister',
                    icon : 'far fa-flushed fa-3x text-warning'
                },
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
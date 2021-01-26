const event = {
    name: 'party',
    // printGuestList: function () { 
    //     console.log('Guest list for ' + this.name)
    // },
    guestList: ['Mike', 'Nicole', 'Sam'],
    printGuestList() {
        // this works as well
        console.log('Guest list for ' + this.name);
        this.guestList.forEach(guest => {
             //     // arrow fxns dont bind their own this value. they access this value in the context in which they are created 
            console.log(guest + 'is attending ' + this.name)
        })
    },

}

event.printGuestList();
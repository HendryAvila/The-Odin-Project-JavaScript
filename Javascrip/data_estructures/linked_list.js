class LinkedList{
    constructor(){
        this.head = null //initialize the head as null
    }

    append(value){
        let newNode = new Node(value) //instanciate a new nodo
        if(!this.head){//verify if the list is empty, if it's the newNode is the head
            this.head = newNode
        }
        else{//if the list is not empty
            let actual  = this.head;// we get the first node
            while(actual.next !== null){//we look for the last node, cos the last one is null
                actual = actual.next
            }
            actual.next = actual
            

        }

    }
}

class Node{
    constructor(value){
        this.value = value //we assign the data to the value property
        this.next = null // next start with null
    }
}
let l = new LinkedList()
l.append(10)
l.append(13)
console.log(l)
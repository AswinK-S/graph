class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]= new Set();
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return(this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
    }

    display(){
        for(let vertex in this.adjacencyList ){
            console.log(vertex + "->" +[...this.adjacencyList[vertex]])
        }

    }

    removeEdge(v1,v2){
        this.adjacencyList[v1].delete(v2)
        this.adjacencyList[v2].delete(v1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return "no edge"
        }
        for(let adjacenctVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacenctVertex)
        }
        delete this.adjacencyList[vertex]
    }
}


let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
// graph.display() 
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('C','D')
graph.display() 
console.log();
graph.removeVertex('D')
graph.display() 



class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] =new Set()
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
        for(let vertex in this.adjacencyList){
            console.log(vertex +"->" + [...this.adjacencyList[vertex]])
        }
    }

    bfs(startVertex){
        const visited=[]
        const queue=[]
        const result=[]
        visited[startVertex]=true
        queue.push(startVertex)
        while(queue.length>0){
            const vertex=queue.shift()
            result.push(vertex)
        for(let neighbour of this.adjacencyList[vertex]){
            if(!visited[neighbour]){
                visited[neighbour]=true
                queue.push(neighbour)
            }
        }
        }return result
    }
    
    dfs(startVertex){
        const visited={}
        const stack=[]
        const result=[]
        visited[startVertex]=true
        stack.push(startVertex)
        while(stack.length>0){
            const vertex=stack.pop()
            result.push(vertex)
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited[neighbour]){
                    visited[neighbour]=true
                    stack.push(neighbour)
                }
            }
        }return result
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
graph.addEdge('C','D')
graph.display() 
console.log();
// graph.removeVertex('D')
// graph.display()

console.log("BFS"+graph.bfs( 'B'))
console.log("DFS"+graph.dfs('A'))
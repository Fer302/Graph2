var countstates1 = 0
var countstates2 = 0
var countstatesF = 0
var countfunctions1 = 0
var countfunctions2 = 0
var countfunctionsF = 0
var Condition = "@"

class node{
    constructor(aux){
        if(aux == 1){
            this.id = countstates1;
            countstates1++;
        }
        if(aux == 2){
            this.id = countstates2;
            countstates2++;
        }
        this.edges= []; //Edges
    }
}

class edge{
    constructor(n1, n2, C, aux){
        if(aux == 1){
            this.id = countfunctions1;
            countfunctions1++;
        }
        if(aux == 2){
            this.id = countfunctions2;
            countfunctions2++;
        }
        this.Condition = C;
        this.nodes = [n1, n2] //Node IDs
    }
}

var Auto1 = []
var Auto2 = []
var FAuto = []
var edgearray1 = []
var edgearray2 = []
var edgearrayF = []
var first // Node
var nodespassed = [] 
var matrix = new Array(0).fill(0).map(() => new Array(0).fill(0));
var Column = []

function update(){
    Condition = document.getElementById("num").value;
    if(Condition.length == 0){
        Condition = 0;
    }
    if(Condition<0){
        Condition *= -1;
    }
    document.getElementById("w").innerHTML = "Condicion seleccionada = " +Condition;
}

function isadd(){
    if(!document.getElementById("add").checked){
        var nodes = document.getElementsByClassName("selected");
        nodes[0].classList.remove("selected");
    }
}

function showedges(aux){
    document.getElementById("owtheedge" + aux).innerHTML = "Automata " + aux;
    var i;
    if(aux == 1)
        var use = edgearray1;
    else if(aux == 2)
        var use = edgearray2;
    var cap = use.length;
    for(i=0; i<cap; i++){
        document.getElementById("owtheedge" + aux).innerHTML +=
            "  [" + use[i].nodes[0] + " --> " + use[i].nodes[1] + " (" + use[i].Condition + ")]      ";
    }
}

function createnode(){
    if(!document.getElementById("add").checked){
        aux = document.getElementById("Automata").value;
        if(aux == 1){
            count=countstates1;
            Auto1.push(new node(aux));
        }
        if(aux == 2){
            count = countstates2;
            Auto2.push(new node(aux));
        }
        var btn = document.createElement("BUTTON"); 
        btn.innerHTML = count; 
        btn.id = count;
        btn.classList.add("node");
        if(aux == 1){
            btn.classList.add("auto1");
            if(document.getElementsByClassName("initialstate").length == 0){
                btn.classList.add("initialstate");
            }
            else if(document.getElementsByClassName("initialstate").length == 1 && document.getElementsByClassName("initialstate")[0].classList.contains("auto2")){
                btn.classList.add("initialstate");
            }
        }
        if(aux == 2){
            btn.classList.add("auto2");
            if(document.getElementsByClassName("initialstate").length == 0){
                btn.classList.add("initialstate");
            }
            else if(document.getElementsByClassName("initialstate").length == 1 && document.getElementsByClassName("initialstate")[0].classList.contains("auto1")){
                btn.classList.add("initialstate");
            }
        }
        if(document.getElementById("final").checked){
            btn.classList.add("finalstate");
        }
        document.body.appendChild(btn);
        pathmatrix();
    }
}

function check(array, auto){
    var i, size;
    if(auto == 1){
        size = edgearray1.length;
    }
    else if(auto == 2){
        size = edgearray2.length;
    }
    if(array.length == 1){
        var nodes = document.getElementById(array[0].id);
        array = [array[0].id, array[0].id];
    }
    else if(array.length == 2){
        var node1 = document.getElementById(first.id);
        var node2 = document.getElementById(array[0].id);
        if(node1 == node2)
            node2 = document.getElementById(array[1].id);
        array = [node1.id, node2.id];
    }
    for(i = 0; i < size; i++){
        if(auto == 1)
            if(edgearray1[i].nodes[0] == array[0] && edgearray1[i].nodes[1] == array[1]){
                edgearray1[i].Condition = Condition;
                showedges(auto);
                if(nodes != null){
                    document.getElementById(nodes.id).classlist.remove("selected2");
                }
                else if(node1 != null){
                    document.getElementById(node1.id).classList.remove("selected");
                    document.getElementById(node2.id).classList.remove("selected");
                }
                return true;
            }
        else if(auto == 2)
            if(edgearray1[i].nodes[0] == array[0] && edgearray1[i].nodes[1] == array[1]){
                edgearray2[i].Condition = Condition;
                showedges(auto);
                return true;
        }
    }
    return false;
}

(function (document) {

    'use strict';

    function startDrag(evt) {
        var diffX = evt.clientX - this.offsetLeft,
            diffY = evt.clientY - this.offsetTop,
            that = this;
        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }
        function stopDrag() {
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);
        }
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
    }
    
    function addedge(aux){
        var nodes = document.getElementsByClassName("selected");
        var node1 = document.getElementById(first.id);
        var node2 = document.getElementById(nodes[0].id);
        if(node1 == node2)
            node2 = document.getElementById(nodes[1].id)
        document.getElementsByClassName("selected")[0].classList.remove("selected");
        document.getElementsByClassName("selected")[0].classList.remove("selected");
        if(aux == 1){
            edgearray1.push(new edge(node1.id, node2.id, Condition));
        }
        if(aux == 2){
            edgearray2.push(new edge(node1.id, node2.id, Condition));
        }
        showedges(aux);
        if(aux == 1){
            Auto1[node1.id].edges.push(edgearray1[countfunctions1-1]);
            Auto1[node2.id].edges.push(edgearray1[countfunctions1-1]);
        }
        if(aux == 2){
            Auto2[node1.id].edges.push(edgearray2[countfunctions2-1]);
            Auto2[node2.id].edges.push(edgearray2[countfunctions2-1]);
        }
        pathmatrix();
    }

    function addedgeself(aux){
        var nodes = document.getElementsByClassName("selected2")[0];
        if(aux == 1){
            edgearray1.push(new edge(nodes.id, nodes.id, Condition));
        }
        if(aux == 2){
            edgearray2.push(new edge(nodes.id, nodes.id, Condition));
        }
        showedges(aux);
        if(aux == 1){
            Auto1[nodes.id].edges.push(edgearray1[countfunctions1-1]);
        }
        if(aux == 2){
            Auto2[nodes.id].edges.push(edgearray2[countfunctions2-1]);
        }
        nodes.classList.remove("selected2");
    }

    function startDragIfDraggable(evt) {
        var target = evt.target
        if (target.classList.contains('node') && !document.getElementById("add").checked) {
            startDrag.call(target, evt);
        }
        else if(target.classList.contains('node') && document.getElementById("add").checked) {
            if(target.classList.contains("selected")){
                target.classList.remove("selected");
                target.classList.add("selected2");
            }
            else
                target.classList.add("selected");
            if(document.getElementsByClassName("selected").length == 2){
                if(document.getElementsByClassName("selected")[0].classList.contains("auto1") && document.getElementsByClassName("selected")[1].classList.contains("auto1")){
                    if(!check(document.getElementsByClassName("selected"), 1))
                        addedge(1);
                }
                else if(document.getElementsByClassName("selected")[0].classList.contains("auto2") && document.getElementsByClassName("selected")[1].classList.contains("auto2")){
                    if(!check(document.getElementsByClassName("selected"), 2))
                        addedge(2);
                }
                else{
                    document.getElementsByClassName("selected")[0].classList.remove("selected");
                    document.getElementsByClassName("selected")[0].classList.remove("selected");
                }
            }
            else if(document.getElementsByClassName("selected2").length == 1){
                if(target.classList.contains('auto1')){
                    if(!check(document.getElementsByClassName("selected2"), 1)){
                    }
                        addedgeself(1);
                }
                else if(target.classList.contains('auto2')){
                    if(!check(document.getElementsByClassName("selected2"), 2))
                        addedgeself(2);
                }
            }
            else
                first = document.getElementsByClassName("selected")[0];
        }
    }
    document.body.addEventListener('mousedown', startDragIfDraggable);
}(document));

function pressent(array, element){
    var i, cap = array.length;
    for (i=0; i < cap; i++){
        if(array[i] == element)
            return true;
    }
    return false;
}

function pathmatrix(){
    var div = document.getElementById("table");
    var child = div.lastElementChild;  
        while (child) { 
            div.removeChild(child); 
            child = div.lastElementChild; 
        } 
    var i, j, capn = Auto1.length, cape = edgearray1.length;
    matrix = new Array(capn).fill(0).map(() => new Array(capn).fill(0));
    for(i=0; i<cape; i++){
        matrix[edgearray1[i].nodes[0]][edgearray1[i].nodes[1]] = 1;
        if(!edgearray1[i].dir)
            matrix[edgearray1[i].nodes[1]][edgearray1[i].nodes[0]] = 1;
    }
    for(i=0; i<capn; i++) {
        var row = document.createElement('tr');
        for(j=0; j<capn; j++){
            var cell = document.createElement('td');
            cell.innerHTML = matrix[i][j];
            row.appendChild(cell);
        }
        div.appendChild(row);
    }
}

function edgecheck(nod, aux){
    nodespassed.push(nod.id);
    if(nodespassed.length == Auto1.length)
        return true;
    var i;
    var cap = nod.edges.length;
    if(aux == 1)
        Aux = Auto1;
    if(aux == 2)
        Aux = Auto2;
    for(i=0; i<cap; i++){
        if(!pressent(nodespassed, nod.edges[i].nodes[0])){
            if(edgecheck(Aux[nod.edges[i].nodes[0]], aux))
                return true;
        }
        if(!pressent(nodespassed, nod.edges[i].nodes[1])){
            if(edgecheck(Aux[nod.edges[i].nodes[1]], aux))
                return true;
        }
    }
    return false;
}

function connect(){
    if(Auto1.length == 0)
        alert("Add at least one node first");
    else{
        Aux = document.getElementById("Automata").value;
        if(Aux == 1)
            aux = Auto1[0];
        else if(Aux == 2)
            aux = Auto2[0];
        nodespassed.length = 0;
        if(edgecheck(aux, Aux))
            alert("True");
        else
            alert("False");
    }
}

function help(){
    alert("PARA AGREGAR ESTADOS:");
    alert("Clickear en el boton 'Nuevo estado'");
    alert("Asegurarse que no este seleccionado 'Añadir funciones', estados no seran creados mientras esa opcion este seleccionada");
    alert("Esto creara un cuadro con el nombre del estado, el que se puede mover");
    alert("Para cambiar a que automata pertenece el estado, se debe seleccionar en el menu en la parte superior izquierda de la pantalla");
    alert("Para determinar si el estado es o no es final, selecciionar 'Hacer final'");
    alert("Los estados finales son los que se ven oscurecidos");
    alert("El estado inicial del automata es el que tiene el borde verde");
    alert("PARA AGREGAR FUNCIONES:");
    alert("Seleccionar 'Añadir funcion");
    alert("Para agregar la condicion de la funcion, introducirla en el cuadro de texto y clickear en 'Actualizar condicion'");
    alert("La condicion que se esta usando se muestra debajo del cuadro de texto, en donde dice 'Condicion seleccionada'");
    alert("Para dejar la condicion vacia, debe introducir un '@'");
    alert("Luego, debe clickear en 2 estados, o el mismo estado 2 veces, para crear la funcion");
    alert("El orden en que selecciona los estados determina la direccion de la funcion");
    alert("Una lista de todas las funciones se puede ver en la parte inferior de la pantalla");
}
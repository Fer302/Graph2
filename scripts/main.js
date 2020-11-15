var countstates1 = 0
var countstates2 = 0
var countstatesF = 0
var countstatescopy = 0
var countfunctions1 = 0
var countfunctions2 = 0
var countfunctionsF = 0
var countfunctionscopy = 0
var Condition = "@"
var language = ["@"]

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
        if(aux == 3){
            this.id = countstatesF;
            countstatesF++;
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
var copyauto = []
var finalstatescopy = []
var edgearray1 = []
var edgearray2 = []
var edgearrayF = []
var edgearraycopy = []
var creatednodes = [] 
var first // Node
var nodespassed = [] 
var matrix = new Array(0).fill(0).map(() => new Array(0).fill(0));
var Column = []

function updatelanguage(string){
    var char;
    while(string.length != 0){
        char = string[0];
        string = string.substring(1);
        if(!pressent(language, char)){
            language.push(char);
        }
    }
    document.getElementById("L").innerHTML = "Lenguaje =";
    for(i=0; i<language.length; i++){
        document.getElementById("L").innerHTML +=
            "  [" + language[i] + "] ";
    }
}

function update(){
    Condition = document.getElementById("num").value;
    if(Condition.length == 0){
        Condition = "@";
    }
    document.getElementById("w").innerHTML = "Condicion seleccionada = " +Condition;
    updatelanguage(Condition);
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
    else if(aux == 3){
        document.getElementById("owtheedge" + aux).innerHTML = "Automata resultante";
        var use = edgearrayF;
    }
    var cap = use.length;
    for(i=0; i<cap; i++){
        document.getElementById("owtheedge" + aux).innerHTML +=
            "  [" + use[i].nodes[0] + " --> " + use[i].nodes[1] + " (" + use[i].Condition + ")]      ";
    }
}

function createnode(final, auto){
    if(auto == 1){
        count = countstates1;
        Auto1.push(new node(1));
        var btn = document.createElement("BUTTON"); 
        btn.innerHTML = count; 
        btn.id = count * 2;
        btn.classList.add("node");
        btn.classList.add("auto1");
        if(count == 0){
            btn.classList.add("initialstate");
        }
        if(final){
            btn.classList.add("finalstate");
        }   
        document.body.appendChild(btn);
    }
    else if(auto == 2){
        count = countstates2;
        Auto2.push(new node(2));
        var btn = document.createElement("BUTTON"); 
        btn.innerHTML = count; 
        btn.id = 2 * count + 1;
        btn.classList.add("node");
        btn.classList.add("auto2");
        if(count == 0){
            btn.classList.add("initialstate");
        }
        if(final){
            btn.classList.add("finalstate");
        }
        document.body.appendChild(btn);
    }
    else if(final != null){
        count = countstatesF;
        FAuto.push(new node(3));
        var btn = document.createElement("BUTTON"); 
        btn.innerHTML = count; 
        btn.id = count*-1;
        btn.classList.add("node");
        btn.classList.add("finalauto");
        if(count == 0){
            btn.classList.add("initialstate");
        }
        if(final){
            btn.classList.add("finalstate");
        }
        document.body.appendChild(btn);
    }
    else if(!document.getElementById("add").checked){
        aux = document.getElementById("Automata").value;
        var btn = document.createElement("BUTTON"); 
        if(aux == 1){
            count=countstates1;
            Auto1.push(new node(aux));
            btn.innerHTML = count; 
            btn.id = 2*count;
        }
        if(aux == 2){
            count = countstates2;
            Auto2.push(new node(aux));
            btn.innerHTML = count; 
            btn.id = (2*count)+1;
        }
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
            edgearray1.push(new edge(node1.id/2, node2.id/2, Condition));
        }
        if(aux == 2){
            edgearray2.push(new edge((node1.id-1)/2, (node2.id-1)/2, Condition));
        }
        if(aux == 1){
            Auto1[node1.id/2].edges.push(edgearray1[countfunctions1-1]);
            Auto1[node2.id/2].edges.push(edgearray1[countfunctions1-1]);
        }
        if(aux == 2){
            Auto2[(node1.id-1)/2].edges.push(edgearray2[countfunctions2-1]);
            Auto2[(node2.id-1)/2].edges.push(edgearray2[countfunctions2-1]);
        }
        showedges(aux);
        pathmatrix();
    }

    function addedgeself(aux){
        var nodes = document.getElementsByClassName("selected2")[0];
        if(aux == 1){
            edgearray1.push(new edge(nodes.id/2, nodes.id/2, Condition));
        }
        if(aux == 2){
            edgearray2.push(new edge((nodes.id-1)/2, (nodes.id-1)/2, Condition));
        }
        showedges(aux);
        if(aux == 1){
            Auto1[nodes.id/2].edges.push(edgearray1[countfunctions1-1]);
        }
        if(aux == 2){
            Auto2[(nodes.id-1)/2].edges.push(edgearray2[countfunctions2-1]);
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
            else if(!target.classList.contains("finalauto"))
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
                        addedgeself(1);
                    }
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

function emptyauto(auto){
    if(auto == 1){
        var aux = document.getElementsByClassName("auto1");
        while(aux[0]){
            aux[0].parentNode.removeChild(aux[0]);
        }
        Auto1.splice(0, Auto1.length)
        edgearray1.splice(0, edgearray1.length);
        countstates1 = 0;
    }
    else if(auto == 2){
        var aux = document.getElementsByClassName("auto2"); 
        while(aux[0]){
            aux[0].parentNode.removeChild(aux[0]);
        }
        Auto2.splice(0, Auto2.length)
        edgearray2.splice(0, edgearray2.length);
        countstates2 = 0;
    }
    else if(auto == 3){
        var aux = document.getElementsByClassName("finalauto");
        while(aux[0]){
            aux[0].parentNode.removeChild(aux[0]);
        }
        FAuto.splice(0, FAuto.length)
        edgearrayF.splice(0, edgearrayF.length);
        countstatesF = 0;
    }
    showedges(auto);
}

function addedgefinal(nod1, nod2, con, auto){
    if(auto != null){
        if(auto == 1){
            edgearray1.push(new edge(nod1.id, nod2.id, con));
            showedges(1);
            Auto1[nod1.id].edges.push(edgearray1[countfunctions1-1]);
            Auto1[nod2.id].edges.push(edgearray1[countfunctions1-1]);
        }
        else if(auto == 2){
            edgearray2.push(new edge(nod1.id, nod2.id, con));
            showedges(2);
            Auto2[nod1.id].edges.push(edgearray2[countfunctions2-1]);
            Auto2[nod2.id].edges.push(edgearray2[countfunctions2-1]);
        }
    }
    else{
        edgearrayF.push(new edge(nod1.id, nod2.id, con));
        showedges(3);
        FAuto[nod1.id].edges.push(edgearrayF[countfunctionsF-1]);
        FAuto[nod2.id].edges.push(edgearrayF[countfunctionsF-1]);
    }
}

function merge(){
    var i, bool, aux;
    emptyauto(3);
    createnode(false);
    for(i = 1; i < Auto1.length + 1; i++){
        bool = document.getElementById((i-1)*2).classList.contains("finalstate");
        createnode(bool);
        if(i == 1){
            addedgefinal(FAuto[0], FAuto[1], "@")
        }
    }
    for(i = 0; i < edgearray1.length; i++){
        aux = edgearray1[i];
        addedgefinal(FAuto[aux.nodes[0] + 1], FAuto[aux.nodes[1] + 1], aux.Condition);
    }
    for(i = 1 + Auto1.length; i < Auto1.length + 1 + Auto2.length; i++){
        bool = document.getElementById(2*(i-1-Auto1.length)+1).classList.contains("finalstate");
        createnode(bool);
        if(i == 1 + Auto1.length){
            addedgefinal(FAuto[0], FAuto[i], "@")
        }
    }
    for(i = 0; i < edgearray2.length; i++){
        aux = edgearray2[i];
        addedgefinal(FAuto[aux.nodes[0] + 1 + Auto1.length], FAuto[aux.nodes[1] + 1 + Auto1.length], aux.Condition);
    }
}

function backup(auto){
    if(auto == 1){
        copyauto = Auto1;
        countstatescopy = countstates1;
        edgearraycopy = edgearray1;
        countfunctionscopy = countfunctions1;
        var aux = document.getElementsByClassName("auto1");
        while(aux[0]){
            if(aux[0].classList.contains("finalstate")){
                finalstatescopy.push(aux[0].id/2);
            }
            aux[0].parentNode.removeChild(aux[0]);
        }
        Auto1.splice(0, Auto1.length)
        edgearray1.splice(0, edgearray1.length);
        countstates1 = 0;
        convertstep1(1, copyauto[0]);
    }
    else if(auto == 2){
        copyauto = Auto2;
        countstatescopy = countstates2;
        edgearraycopy = edgearray2;
        countfunctionscopy = countfunctions2;
        var aux = document.getElementsByClassName("auto2");
        while(aux[0]){
            if(aux[0].classList.contains("finalstate")){
                finalstatescopy.push((aux[0].id/2) + 1);
            }
            aux[0].parentNode.removeChild(aux[0]);
        }
        Auto2.splice(0, Auto2.length)
        edgearray2.splice(0, edgearray2.length);
        countstates2 = 0;
    }
    else if(auto == 3){
        copyauto = FAuto;
        countstatescopy = countstatesF;
        edgearraycopy = edgearrayF;
        countfunctionscopy = countfunctionsF;
        var aux = document.getElementsByClassName("finalauto");
        while(aux[0]){
            if(aux[0].classList.contains("finalstate")){
                finalstatescopy.push(aux[0].id *-1);
            }
            aux[0].parentNode.removeChild(aux[0]);
        }
        FAuto.splice(0, Auto1.length)
        edgearrayF.splice(0, edgearray1.length);
        countstatesF = 0;
    }
}

function convertstep3(arr, nod, auto){
    var count, i, j, aux, functions = [], char, nods = [], bool = false;
    if(auto == 1){
        count = countstates1;
    }
    else if(auto == 2){
        count = countstates2;
    }
    else if(auto == 3){
        count = countstatesF;
    }
    for(i = 0; i < arr.length - 1; i++){
        aux = copyauto[arr[i]];
        for(j = 0; j < aux.edges.length; j++){
            if(aux.edges[j].nodes[0] == arr[i]){
                functions.push(aux.edges[j]);
            }
        }
    }
    for(i = 1; i < language.length; i++){
        char = language[i];
        for(j = 0; j < functions.length; j++){
            if(functions[j].Condition == char){
                nods.push(functions[j].nodes[1])
            }
        }
        for(j = 0; j < count; j++){
            if(!bool){
                nods.push(j);
                bool = pressent(creatednodes, nods);
                aux = nods.pop();
            }
        }
        if(!bool){
            aux = count;
            for(j = 0; j < nods.length; j++){
                convertstep2(copyauto[nods[i]], nods)
            }
            bool = determinefinal(nods, 1);
            createnode(bool, 1);
            nods.push(count-1);
            creatednodes.push(nods);
            if(auto == 1){
                convertstep3(arr, Auto1[count], auto);
            }
            else if(auto == 2){
                convertstep3(arr, Auto2[count], auto);
            }
            else if(auto == 3){
                convertstep3(arr, FAuto[count], auto);
            }
        }
        if(nod.length != 0){
            if(auto == 1){
                addedgefinal(nod, Auto1[aux], char, 1);
            }
            else if(auto == 2){
                addedgefinal(nod, Auto2[aux], char, 1);
            }
            else if(auto == 3){
                addedgefinal(nod, FAuto[aux], char, 1);
            }
        }
    }
}

function convertstep2(nod, arr){
    var i, aux;
    for(i == 0; i < nod.edges.length; i++){
        aux = nod.edges[i];
        if(aux.Condition == "@" && aux.nodes[0] == nod.id && !pressent(arr, aux.nodes[1])){
            arr.push(aux.nodes[1]);
            convertstep2(aux.nodes[1], arr);
        }
    }
}

function determinefinal(arr){
    var i, nod;
    for(i = 0; i < arr.length; i++){
        nod = copyauto[arr[i]];
        if(pressent(finalstatescopy, nod.id)){
            return true;
        }
    }
    return false;
}

function convertstep1(auto, nod){
    var arr = [], bool, i, count;
    if(auto == 1){
        count = countstates1 - 1;
    }
    else if(auto == 2){
        count = countstates2 - 1;
    }
    else if(auto == 3){
        count = countstatesF - 1;
    }
    arr.push(nod.id);
    for(i = 0; i < arr.length; i++){
        convertstep2(copyauto[arr[i]], arr);
    }
    bool = determinefinal(arr);
    createnode(bool, auto);
    arr.push(count);
    creatednodes.push(arr);
    if(auto == 1){
        convertstep3(arr, Auto1[count], auto);
    }
    else if(auto == 2){
        convertstep3(arr, Auto2[count], auto);
    }
    else if(auto == 3){
        convertstep3(arr, FAuto[count], auto);
    }
}

function convert(auto){
    backup(auto);
    convertstep1(auto, copyauto[0]);
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
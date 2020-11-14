class UserInput {
    constructor(initialState, finalStates, states, alphabet, transitions) {
        this.initialState = initialState;
        this.finalStates = finalStates;
        this.states = states;
        this.alphabet = alphabet;
        this.transitions = transitions;
    }
}


$(document).ready(function () {
    console.log("aaaa");
    $("#probando2").hide();
    $("#probando3").hide();
    $("#probando4").hide();
    $("#probando5").hide();
    $("#probando6").hide();
    $("#auto1").click(function(){
        $("#probando6").hide(500);
        $("#probando2").hide(500);
        $("#probando1").show(500);
        $("#probando3").hide(500);
        $("#probando4").hide(500);
        $("#probando5").hide(500);

    })
    $("#auto2").click(function(){
        $("#probando6").hide(500);
        $("#probando1").hide(500);
        $("#probando2").show(500);
        $("#probando3").hide(500);
        $("#probando4").hide(500);
        $("#probando5").hide(500);

    })
    $("#funciones").click(function(){
        $("#probando6").hide(500);
        $("#probando1").hide(500);
        $("#probando2").hide(500);
        $("#probando4").hide(500);
        $("#probando3").show(500);
        $("#probando5").hide(500);

    })
    $("#btnConcatenacion").click(function(){
        $("#probando6").hide(500);
        $("#probando1").hide(500);
        $("#probando2").hide(500);
        $("#probando3").hide(500);
        $("#probando4").show(500);
        $("#probando5").hide(500);
    })
    $("#btnInterseccion").click(function(){
        $("#probando6").hide(500);
        $("#probando1").hide(500);
        $("#probando2").hide(500);
        $("#probando3").hide(500);
        $("#probando4").hide(500);
        $("#probando5").show(500);

    })
    $("#btnComplemento").click(function(){
        $("#probando1").hide(500);
        $("#probando2").hide(500);
        $("#probando3").hide(500);
        $("#probando4").hide(500);
        $("#probando5").hide(500);
        $("#probando6").show(500);
        


    })




    $("#new-transition").click(function () {

        let transitionsDiv = $("#nfa-transitions");
        let clone = $("#nfa-transitions .production-row").last().clone(true);

        clone.appendTo(transitionsDiv);

        $(".remove-button").show();

    });

    let removeButton = $(".remove-button");

    // Hide all remove buttons initially
    removeButton.hide();
    // Register onClick() event for remove buttons
    removeButton.click(function () {

        let parent = $(this).parent();
        let grandparent = parent.parent();

        parent.fadeOut(function () {
            $(this).remove();
        });

        if (grandparent.children().length <= 2) {
            $(".remove-button").hide();
        }

    });
    $(".production-row input").on('keypress', function (e) {
        if (e.which === 13) {
            $("#new-transition").click();
        }
    });

    $(".production-row input").on('keyup', function (e) {
        if (e.which !== 13) {
            $("#verify-update-debug").click();
        }
    });

    $("#initialStateInput").on('keyup', function (e) {
        $("#verify-update-debug").click();
    });

    $("#finalStatesInput").on('keyup', function (e) {
        $("#verify-update-debug").click();
    });

    $("#exampleBtn").click(function () {

        $("#initialStateInput").val('q0');
        $("#finalStatesInput").val('q1');

        let transitionsDiv = $("#nfa-transitions");
        let clone = $("#nfa-transitions .production-row").first().clone(true);

        transitionsDiv.children().each(function () {
            $(this).remove();
        });

        /*clone.find(".current-state-input").val('q0');
        clone.find(".input-symbol").val('');
        clone.find(".next-states").val('q1');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q1');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q2');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q2');
        clone.find(".input-symbol").val('b');
        clone.find(".next-states").val('q3');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q3');
        clone.find(".input-symbol").val('');
        clone.find(".next-states").val('q1');
        transitionsDiv.append(clone);

        clone.find(".current-state-input").val('q0');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q2');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q0');
        clone.find(".input-symbol").val('b');
        clone.find(".next-states").val('q1');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q1');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q2');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('b');
        clone.find(".next-states").val('q2');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q2');
        clone.find(".input-symbol").val('');
        clone.find(".next-states").val('q0');
        transitionsDiv.append(clone);*/

        clone.find(".current-state-input").val('q0');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q1');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q0');
        clone.find(".input-symbol").val('');
        clone.find(".next-states").val('q1');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q0');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('b');
        clone.find(".next-states").val('q1');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q2');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('b');
        clone.find(".next-states").val('q2');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q2');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q2');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q2');
        clone.find(".input-symbol").val('b');
        clone.find(".next-states").val('q1');
        transitionsDiv.append(clone);

        $(".remove-button").show();
        $("#verify-update-debug").click();

    });

    $("#resetBtn").click(function () {
        $("#initialStateInput").val('');
        $("#finalStatesInput").val('');
        $(".remove-button").slice(1).click();
        $(".remove-button").hide();
        $("#nfa-transitions input").val('');
        $("#current-nfa").empty();
        $("#current-dfa").empty();
        $("#current-dfa-minimized").empty();
        $("#step-div").empty();
    });
    $("#Mostrar").click(function() {
        let user_input2= fetchUserInput2();
        let user_input = fetchUserInput();
        let UnionStr ="digraph fsm {\n";
        UnionStr+= "rankdir=LR;\n";
        UnionStr+= "size=\"8,5\";\n";
        UnionStr+= "node [shape = doublecircle]; " + user_input.finalStates +"," + user_input2.finalStates2 + ";\n";
        UnionStr+= "node [shape = point]; INITIAL_STATE\n";
        UnionStr+= "node [shape = circle];\n";
        UnionStr+="INITIAL_STATE -> " + "ini"+ ";\n";
        for (let transition of user_input.transitions)
            UnionStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";
        for (let transition of user_input2.transitions2)
            UnionStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";
        UnionStr+="" + "ini"+ " -> " + user_input2.initialState2 + " [label=" + '\u03BB' + "];\n";
        UnionStr+="" + "ini"+ " -> " + user_input.initialState + " [label=" + '\u03BB' + "];\n";
        UnionStr+="}";
        console.log(UnionStr);
        d3.select("#union-automatas").graphviz().zoom(false).renderDot(UnionStr);
        var nuevoInicial="ini";
        var estadosDef=[];
        if(typeof(user_input.finalStates)==='string' || typeof(user_input2.finalStates2)==='string'){
            if(typeof(user_input.finalStates)==='string' && typeof(user_input2.finalStates2)==='string'){
                estadosDef.push(user_input.finalStates);
                estadosDef.push(user_input2.finalStates2);
            }
            else if(typeof(user_input.finalStates)==='string' && typeof(user_input2.finalStates2)!=='string'){
                estadosDef.push(user_input.finalStates);
                estadosDef=estadosDef.concat(user_input2.finalStates2);
            }
            else if(typeof(user_input.finalStates)!=='string' && typeof(user_input2.finalStates2)==='string'){
                estadosDef.push(user_input2.finalStates2);
                estadosDef=estadosDef.concat(user_input.finalStates);
            }

        }
        else{
            estadosDef=user_input.finalStates.concat(user_input2.finalStates2);
        }
        var nuevosStates=user_input.states.concat(user_input2.states2);
        nuevosStates.push(nuevoInicial);
        var transFinales=[];
        for(let x of user_input.transitions){
            transFinales.push(x);
        }
        for(let y of user_input2.transitions2){
            transFinales.push(y);
        }
        transFinales.push(new Transition(nuevoInicial, user_input.initialState, '\u03BB'));
        transFinales.push(new Transition(nuevoInicial, user_input2.initialState2, '\u03BB'));
        var a = user_input.alphabet, b =user_input2.alphabet2;
        var c = a.concat(b.filter((item) => a.indexOf(item) < 0));
        let dfa = generateDFA(new NFA(nuevoInicial ,estadosDef, nuevosStates, c, transFinales));
        let dotStr = dfa.toDotString();
        d3.select("#union-dfa").graphviz().zoom(false).renderDot(dotStr);
        dfa = minimizeDFA(dfa);
        dotStr = dfa.toDotString();
        d3.select("#union-min").graphviz().zoom(false).renderDot(dotStr);
        console.log(estadosDef);
        

    })
    $("#mostrarConcatenacion").click(function(){
        let user_input=fetchUserInput();
        let user_input2=fetchUserInput2();
        let  cStr="digraph fsm {\n";
        cStr+="size=\"8,5\";\n";
        cStr+= "node [shape = doublecircle]; "  + user_input2.finalStates2 + ";\n";
        cStr+= "node [shape = point]; INITIAL_STATE\n";
        cStr+= "node [shape = circle];\n";
        cStr+= "INITIAL_STATE -> " + user_input.initialState + ";\n";
        for (let transition of user_input.transitions)
            cStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";
        for (let transition of user_input2.transitions2)
            cStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";
        let sp= user_input.finalStates;
        console.log(typeof(sp));
        if(typeof(sp)==='string'){
            cStr+="" + sp + " -> " + user_input2.initialState2 + " [label=" + '\u03BB' + "];\n";
        }
        else {
            for (let i of sp) {
                cStr += "" + i + " -> " + user_input2.initialState2 + " [label=" + '\u03BB' + "];\n";
                console.log(i);
            }
        }
        cStr+="}";
        console.log(cStr);
        d3.select("#concatenacion-automatas").graphviz().zoom(false).renderDot(cStr);
        let nuevoInicial = user_input.initialState;
        let estadosDef= user_input2.finalStates2;
        let nuevosStates= user_input.states.concat(user_input2.states2);
        let transFinales=[];
        for(let x of user_input.transitions){
            transFinales.push(x);
        }
        for(let y of user_input2.transitions2){
            transFinales.push(y);
        }
        if(typeof(sp)==='string'){
            transFinales.push(new Transition(nuevoInicial, user_input2.initialState2, '\u03BB'));
        }
        else{
            for(let est of sp){
                transFinales.push(new Transition(est, user_input2.initialState2, '\u03BB'));
            }    
        }
        var a = user_input.alphabet, b =user_input2.alphabet2;
        var c = a.concat(b.filter((item) => a.indexOf(item) < 0));
        let dfa = generateDFA(new NFA(nuevoInicial ,estadosDef, nuevosStates, c, transFinales));
        let dotStr = dfa.toDotString();
        d3.select("#concatenacion-afd").graphviz().zoom(false).renderDot(dotStr); 
        dfa = minimizeDFA(dfa);
        dotStr = dfa.toDotString();
        d3.select("#conc-min").graphviz().zoom(false).renderDot(dotStr); 
    })
    $("#mostrarInterseccion").click(function(){
        var auxFinal=[];
        var auxFinal2=[];
        var estadosDef=[];
        var nuevoInicial="ini";
        let user_input=fetchUserInput();
        let user_input2=fetchUserInput2();
        for(let elemento of user_input.states){
            if(user_input.finalStates.includes(elemento)==false){
                auxFinal.push(elemento);
            }
        }
        for(let elemento of user_input2.states2){
            if(user_input2.finalStates2.includes(elemento)==false){
                auxFinal2.push(elemento);
            }
        }
        var aux2=user_input.states.concat(user_input2.states2);
        aux2.push(nuevoInicial);
        console.log(aux2);
        console.log(user_input.transitions);
        var aux3=[];
        for(let x of user_input.transitions){
            aux3.push(x);
        }
        for(let y of user_input2.transitions2){
            aux3.push(y);
        }
        estadosDef=auxFinal.concat(auxFinal2);
        console.log(estadosDef);
        console.log(aux2);
        aux3.push(new Transition(nuevoInicial, user_input.initialState, '\u03BB'));
        aux3.push(new Transition(nuevoInicial, user_input2.initialState2, '\u03BB'));
        let dotStr = "digraph fsm {\n";
        dotStr += "rankdir=LR;\n";
        dotStr += "size=\"8,5\";\n";
        dotStr += "node [shape = doublecircle]; " + estadosDef + ";\n";
        dotStr += "node [shape = point]; INITIAL_STATE\n";
        dotStr += "node [shape = circle];\n";
        dotStr += "INITIAL_STATE -> " + nuevoInicial + ";\n";

        for (let transition of aux3){
            dotStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";
        }
        dotStr += "}";
        console.log(dotStr);
        console.log(nuevoInicial);
        console.log(estadosDef);
        console.log(aux2);
        console.log(user_input.alphabet);
        console.log(aux3);
        let dfa = generateDFA(new NFA(nuevoInicial ,estadosDef, aux2, user_input.alphabet, aux3));
        console.log(dfa.transitions);
        dotStr = dfa.toDotString();
        console.log(dotStr);
        d3.select("#interseccion-automatas").graphviz().zoom(false).renderDot(dotStr);
    })
    $("#mostrarComp1").click(function(){
        let auxFinal=[];
        let user_input=fetchUserInput();
        for(let elemento of user_input.states){
            if(user_input.finalStates.includes(elemento)==false){
                auxFinal.push(elemento);
            }
        }
        var estadosDef=auxFinal.join();
        let dotStr = "digraph fsm {\n";
        dotStr += "rankdir=LR;\n";
        dotStr += "size=\"8,5\";\n";
        dotStr += "node [shape = doublecircle]; " + estadosDef + ";\n";
        dotStr += "node [shape = point]; INITIAL_STATE\n";
        dotStr += "node [shape = circle];\n";
        dotStr += "INITIAL_STATE -> " + user_input.initialState + ";\n";

        for (let transition of user_input.transitions)
            dotStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";

        dotStr += "}";
        d3.select("#primer-comp").graphviz().zoom(false).renderDot(dotStr);


    })
    $("#mostrarComp2").click(function(){
        let auxFinal=[];
        let user_input=fetchUserInput2();
        for(let elemento of user_input.states2){
            if(user_input.finalStates2.includes(elemento)==false){
                auxFinal.push(elemento);
            }
        }
        var estadosDef=auxFinal.join();
        let dotStr = "digraph fsm {\n";
        dotStr += "rankdir=LR;\n";
        dotStr += "size=\"8,5\";\n";
        dotStr += "node [shape = doublecircle]; " + estadosDef + ";\n";
        dotStr += "node [shape = point]; INITIAL_STATE\n";
        dotStr += "node [shape = circle];\n";
        dotStr += "INITIAL_STATE -> " + user_input.initialState2 + ";\n";

        for (let transition of user_input.transitions2)
            dotStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";

        dotStr += "}";
        d3.select("#segundo-comp").graphviz().zoom(false).renderDot(dotStr);


    })


    $("#verify-update-debug").click(function () {

        let user_input = fetchUserInput();

        let dotStr = "digraph fsm {\n";
        dotStr += "rankdir=LR;\n";
        dotStr += "size=\"8,5\";\n";
        dotStr += "node [shape = doublecircle]; " + user_input.finalStates + ";\n";
        dotStr += "node [shape = point]; INITIAL_STATE\n";
        dotStr += "node [shape = circle];\n";
        dotStr += "INITIAL_STATE -> " + user_input.initialState + ";\n";

        for (let transition of user_input.transitions)
            dotStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";

        dotStr += "}";

        //document.getElementById('current-nfa-status').innerText = 'Rendering...';

        // TODO This render method throws an exception if the input is invalid
        // we should catch the exception and print an "invalid input" error to the user
        console.log(dotStr);
        d3.select("#current-nfa").graphviz().zoom(false).renderDot(dotStr);

        // Now that the preview is done, generate the DFA
        let dfa = generateDFA(new NFA(user_input.initialState, user_input.finalStates, user_input.states, user_input.alphabet, user_input.transitions));

        let step_div = $("#step-div");

        step_div.empty();

        for (let i = 0; i <= LAST_COMPLETED_STEP_COUNT; i++) {
            step_div.append('<button class="btn btn-xs btn-info" data-step-number="' + (i + 1) + '">Step ' + (i + 1) + '</button>');
        }

        dotStr = dfa.toDotString();
        console.log(dotStr);
        d3.select("#current-dfa").graphviz().zoom(false).renderDot(dotStr);

        dfa = minimizeDFA(dfa);
        dotStr = dfa.toDotString();
        console.log(dotStr);
        $("#current-dfa-minimized").show();
        d3.select("#current-dfa-minimized").graphviz().zoom(false).renderDot(dotStr);

    });

    $("#step-div").on("click", "button", function () {

        let step = $(this).data('step-number');

        $(this).parent().find("button").removeClass("active");
        $(this).addClass("active");

        let user_input = fetchUserInput();
        let dfa = generateDFA(new NFA(user_input.initialState, user_input.finalStates, user_input.states, user_input.alphabet, user_input.transitions), step);
        let dotStr = dfa.toDotString();

        d3.select("#current-dfa").graphviz().zoom(false).renderDot(dotStr);

        if (step !== (LAST_COMPLETED_STEP_COUNT + 1)) {

            $("#current-dfa-minimized").hide();

        } else {

            $("#current-dfa-minimized").show();

        }

    });



});


function fetchUserInput() {

    let initialState = $("#initialStateInput").val().trim();
    let finalStates = $("#finalStatesInput").val().trim();
    let states = [];
    let alphabet = [];
    let transitions = [];

    if (initialState.includes('{') || finalStates.includes('{')) {
        alert('State names cannot contain the \"{\" character!');
        return null;
    }

    $(".production-row").each(function () {

        let currentState = $(this).find(".current-state-input").val().trim();
        let inputSymbol = $(this).find(".input-symbol").val().trim();

        if (inputSymbol === '')
            inputSymbol = '\u03BB'; //lambda character

        let nextState = $(this).find(".next-states").val().trim();

        // TODO Better state validation?
        if (currentState.includes('{') || nextState.includes('{')) {
            alert('State names cannot contain the \"{\" character!');
            return;
        }

        transitions.push(new Transition(currentState, nextState, inputSymbol));

        // Populate alphabet without lambda
        if (inputSymbol !== '\u03BB' && !alphabet.includes(inputSymbol))
            alphabet.push(inputSymbol);

        if (!states.includes(currentState))
            states.push(currentState);

        if (!states.includes(nextState))
            states.push(nextState);

    });

    if (finalStates.includes(","))
        finalStates = finalStates.split(",");

    return new UserInput(initialState, finalStates, states, alphabet, transitions);
}


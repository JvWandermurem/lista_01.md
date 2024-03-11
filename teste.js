class SomadorDeNotas {
    constructor() {
        this.total = 0;
    }

    adicionarNota(nota) {
        this.total += nota;
    }

    notaTotal() {
        console.log(` sua nota total foi: ${this.total}`);
    }
}

let somador = new SomadorDeNotas();


somador.adicionarNota(5);
somador.adicionarNota(7);
somador.adicionarNota(8);


somador.notaTotal();

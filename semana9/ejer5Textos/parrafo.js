class Parrafo {   
    #texto;
    #justificado;

    constructor(texto, justificado) {
        this.#texto = texto;
        this.#justificado = justificado;
    }

    get texto() {
        return this.#texto;
    }

    get justificado(){
        return this.#justificado;
    }
}

module.exports = Parrafo;
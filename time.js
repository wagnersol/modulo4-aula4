let time = [
    {
        nome: "andre",
        camisa: 5,
    },
    {
        nome: "miro",
        camisa: 9,
    },
    {
        nome: "wagner",
        camisa: 11,
    },
    {
        nome: "diego",
        camisa: 8,
    },

    {
        nome: "erso",
        camisa: 2,
    },
    {
        nome: "katete",
        camisa: 7,

    },
    {
        nome: "thimba",
        camisa: 6,
    },
    {
        nome: "davi",
        camisa: 4,
    },
    {
        nome: "matheus",
        camisa: 3,
    },
    {
        nome: "evaldo",
        camisa: 1,
    },
    {
        nome: "caravan",
        camisa: 10,
    },

];
console.log(time.length)
console.table(time)


/*for (let i = 0; i < time.length; i++){
    console.log(i, time[i]);

}*/

/*for (const i in time){
    console.log (i, time[i]);
}
  for (const jogador of time){
    console.log(jogador)
}*/

for (const jogador of time) {

    jogador.multiplo = jogador.camisa * 2


}
console.table(time);

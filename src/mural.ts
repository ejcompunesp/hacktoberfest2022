type memberType = {
  nome: string,
  diretoria: string,
  tecnologias: string,
  sobreMim: string,
}

type arrayMemberType = memberType[];


export const members: arrayMemberType = [
  // {
  //   nome: "karol marques",
  //   diretoria: "RH ❤️️❤️️",
  //   tecnologias: "React.js, Flutter, Typescript, Java (bem de vez em quando porque né)",
  //   sobreMim: "oi 👻"
  // },
  {
    nome: "karol marques",
    diretoria: "(a melhor delas) RH ❤️️❤️️",
    tecnologias: "React.js, Flutter, Typescript, Java (bem de vez em quando porque né)",
    sobreMim: "oi 👻 gosto de gatos e cerveja, apenas."
  },
  {
    nome: "haria othon",
    diretoria: "Adm/Jur/Fin",
    tecnologias: "Nodejs, mongodb, Aws (tentando né :p), typescript.",
    sobreMim: "Olá, sou diretor de Adm/Jur/Fin, estudante do 4ºAno (4!) em bacharel de Ciências da Computação."
  },
];
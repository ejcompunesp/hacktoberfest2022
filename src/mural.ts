type memberType = {
  nome: string,
  diretoria: string,
  tecnologias: string,
  sobreMim: string,
}

type arrayMemberType = memberType[];


export const members: arrayMemberType = [
  {
    nome: "karol marques",
    diretoria: "RH ❤️️❤️️",
    tecnologias: "React.js, Flutter, Typescript, Java (bem de vez em quando porque né)",
    sobreMim: "oi 👻"
  },
];